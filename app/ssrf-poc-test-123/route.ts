import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

interface SSRFOptions {
  url: string;
  method?: string;
  headers?: Record<string, string>;
  body?: string;
  timeout?: number;
}

async function performSSRF(options: SSRFOptions) {
  const startTime = Date.now();
  const { url, method = "GET", headers = {}, body, timeout = 5000 } = options;

  let targetUrl: URL;
  try {
    targetUrl = new URL(url);
  } catch (err: any) {
    return NextResponse.json(
      {
        success: false,
        error: "Invalid URL provided",
        details: err.message,
        providedUrl: url,
      },
      { status: 400 }
    );
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    const fetchHeaders: Record<string, string> = {
      "User-Agent": "SSRF-PoC-Tester/1.0",
      ...headers,
    };

    const fetchOptions: RequestInit = {
      method: method.toUpperCase(),
      headers: fetchHeaders,
      signal: controller.signal,
      redirect: "follow",
    };

    if (body && !["GET", "HEAD"].includes(method.toUpperCase())) {
      fetchOptions.body = body;
    }

    const response = await fetch(targetUrl.toString(), fetchOptions);
    clearTimeout(timeoutId);

    const elapsedMs = Date.now() - startTime;
    const responseHeaders: Record<string, string> = {};
    response.headers.forEach((value, key) => {
      responseHeaders[key] = value;
    });

    const contentType = response.headers.get("content-type") || "";
    let responseData: string;

    const buffer = await response.arrayBuffer();
    const textDecoder = new TextDecoder("utf-8");
    responseData = textDecoder.decode(buffer);

    // Limit body payload to 500KB to prevent memory exhaustion
    const MAX_BODY_LEN = 500 * 1024;
    let truncated = false;
    if (responseData.length > MAX_BODY_LEN) {
      responseData = responseData.substring(0, MAX_BODY_LEN);
      truncated = true;
    }

    return NextResponse.json({
      success: true,
      targetUrl: targetUrl.toString(),
      status: response.status,
      statusText: response.statusText,
      elapsedMs,
      contentType,
      truncated,
      headers: responseHeaders,
      body: responseData,
    });
  } catch (err: any) {
    clearTimeout(timeoutId);
    const elapsedMs = Date.now() - startTime;
    
    let errorType = "FETCH_ERROR";
    if (err.name === "AbortError") {
      errorType = "TIMEOUT_ERROR";
    }

    return NextResponse.json(
      {
        success: false,
        errorType,
        error: err.message || String(err),
        code: err.code || null,
        targetUrl: targetUrl.toString(),
        elapsedMs,
      },
      { status: 502 }
    );
  }
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const targetUrl = searchParams.get("url") || searchParams.get("target");

  if (!targetUrl) {
    return NextResponse.json({
      status: "active",
      message: "SSRF PoC Testing Endpoint Ready (/ssrf-poc-test-123)",
      usage: {
        GET_query: "/ssrf-poc-test-123?url=http://example.com",
        POST_json: {
          endpoint: "/ssrf-poc-test-123",
          headers: { "Content-Type": "application/json" },
          body: {
            url: "http://127.0.0.1:80",
            method: "GET",
            headers: { "Custom-Header": "value" },
            timeout: 3000,
          },
        },
      },
      parameters: {
        url: "Target URL to fetch (required, e.g. http://127.0.0.1 or http://169.254.169.254)",
        target: "Alias for url parameter",
        method: "HTTP method (GET, POST, PUT, DELETE, etc. Default: GET)",
        headers: "JSON object of request headers (POST only)",
        body: "String body for POST/PUT requests (POST only)",
        timeout: "Timeout in milliseconds (Default: 5000)",
      },
    });
  }

  const method = searchParams.get("method") || "GET";
  const timeout = parseInt(searchParams.get("timeout") || "5000", 10);

  return performSSRF({
    url: targetUrl,
    method,
    timeout: isNaN(timeout) ? 5000 : timeout,
  });
}

export async function POST(request: NextRequest) {
  try {
    const json = await request.json();
    if (!json || typeof json.url !== "string") {
      return NextResponse.json(
        {
          success: false,
          error: "Missing required 'url' string parameter in JSON body",
        },
        { status: 400 }
      );
    }

    return performSSRF({
      url: json.url,
      method: json.method || "GET",
      headers: json.headers,
      body: json.body,
      timeout: typeof json.timeout === "number" ? json.timeout : 5000,
    });
  } catch (err: any) {
    return NextResponse.json(
      {
        success: false,
        error: "Failed to parse JSON body",
        details: err.message,
      },
      { status: 400 }
    );
  }
}

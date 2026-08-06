import { NextRequest } from "next/server";

const png = Buffer.from(
  "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO7Z0n0AAAAASUVORK5CYII=",
  "base64"
);

export async function GET(req: NextRequest) {
  console.log("=================================");
  console.log("SSRF Test Endpoint Hit");
  console.log("Time:", new Date().toISOString());
  console.log("Method:", req.method);
  console.log("URL:", req.url);
  console.log("IP:", req.headers.get("x-forwarded-for") || "Unknown");
  console.log("User-Agent:", req.headers.get("user-agent") || "Unknown");

  console.log("Headers:");
  req.headers.forEach((value, key) => {
    console.log(`${key}: ${value}`);
  });

  return new Response(png, {
    status: 200,
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "no-store, no-cache, must-revalidate, max-age=0",
      "Pragma": "no-cache",
      "Expires": "0",
    },
  });
}
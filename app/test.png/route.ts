import { NextRequest } from "next/server";

const png = Buffer.from(
  "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO7Z0n0AAAAASUVORK5CYII=",
  "base64"
);

export async function GET(req: NextRequest) {
  console.log("=== PNG Requested ===");
  console.log("Time:", new Date().toISOString());
  console.log("URL:", req.url);
  console.log("IP:", req.headers.get("x-forwarded-for"));
  console.log("User-Agent:", req.headers.get("user-agent"));

  return new Response(png, {
    status: 200,
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "no-store, no-cache, must-revalidate, max-age=0",
    },
  });
}
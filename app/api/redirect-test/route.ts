import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.redirect(
    "http://127.0.0.1:9999",
    302
  );
}
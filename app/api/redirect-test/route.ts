import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.redirect(
    "https://blackroot-np.vercel.app/test.png?from=redirect",
    302
  );
}
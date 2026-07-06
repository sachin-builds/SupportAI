import { scalekit } from "@/lib/scalekit";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    const code = searchParams.get("code");

    if (!code) {
      return NextResponse.json(
        { message: "Code not found" },
        { status: 400 }
      );
    }

    const redirectUri = `${process.env.NEXT_PUBLIC_APP_URL}/api/auth/callback`;

    const session = await scalekit.authenticateWithCode(code, redirectUri);

    console.log("Session:", session);

    const response = NextResponse.redirect(
      new URL("/", process.env.NEXT_PUBLIC_APP_URL!)
    );

    response.cookies.set("access_token", session.accessToken, {
      httpOnly: true,
      secure: false,
      path: "/",
      maxAge: 24 * 60 * 60,
    });

    return response;
  } catch (err) {
    console.error("Callback Error:", err);

    return NextResponse.json(
      {
        error: err instanceof Error ? err.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
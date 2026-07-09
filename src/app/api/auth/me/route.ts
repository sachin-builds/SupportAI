import { NextResponse } from "next/server";
import { getSession } from "@/lib/getSession";

export async function GET() {
  try {
    const session: any = await getSession();

    if (!session?.user) {
      return NextResponse.json(
        { email: null },
        { status: 401 }
      );
    }

    return NextResponse.json({
      email: session.user.email,
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { email: null },
      { status: 500 }
    );
  }
}
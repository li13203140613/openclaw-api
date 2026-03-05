import { NextRequest, NextResponse } from "next/server";
import { saveEmail } from "@/lib/kv";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const email = String(body?.email ?? "").trim().toLowerCase();
    const source = String(body?.source ?? "homepage");

    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!isValidEmail) {
      return NextResponse.json(
        { success: false, message: "Invalid email format." },
        { status: 400 }
      );
    }

    const host = request.headers.get("host") || "unknown";
    const site = host.replace(/:\d+$/, "");

    await saveEmail(email, source, site);

    return NextResponse.json(
      {
        success: true,
        message:
          "Email received. We will notify you first when OpenClaw API slots open.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Subscribe error:", error);
    return NextResponse.json(
      { success: false, message: "Service unavailable. Please retry later." },
      { status: 500 }
    );
  }
}

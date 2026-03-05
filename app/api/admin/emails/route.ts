import { NextResponse } from "next/server";
import { ensureAdminAuth } from "@/lib/admin";
import { getAllEmails, getEmailCount } from "@/lib/kv";

export async function GET() {
  try {
    await ensureAdminAuth();
    const emails = await getAllEmails();
    const total = await getEmailCount();
    return NextResponse.json({ emails, total });
  } catch (error) {
    if (error instanceof Error && error.message === "UNAUTHORIZED") {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }
    console.error("Admin emails error:", error);
    return NextResponse.json(
      { message: "Failed to load emails" },
      { status: 500 }
    );
  }
}

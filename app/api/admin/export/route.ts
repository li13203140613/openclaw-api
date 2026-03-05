import { NextResponse } from "next/server";
import { ensureAdminAuth } from "@/lib/admin";
import { getAllEmails } from "@/lib/kv";

export async function GET() {
  try {
    await ensureAdminAuth();
    const emails = await getAllEmails();

    const header = "id,email,source,site,createdAt";
    const rows = emails.map((item) => {
      const createdAt =
        item.createdAt instanceof Date
          ? item.createdAt.toISOString()
          : String(item.createdAt ?? "");
      return `${item.id},${item.email},${item.source},${item.site},${createdAt}`;
    });
    const csv = [header, ...rows].join("\n");

    return new NextResponse(csv, {
      status: 200,
      headers: {
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition": `attachment; filename="openclaw-emails.csv"`,
      },
    });
  } catch (error) {
    if (error instanceof Error && error.message === "UNAUTHORIZED") {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }
    console.error("Admin export error:", error);
    return NextResponse.json(
      { message: "Failed to export emails" },
      { status: 500 }
    );
  }
}

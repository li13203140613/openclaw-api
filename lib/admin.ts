import { headers } from "next/headers";

export async function ensureAdminAuth() {
  const adminKey = process.env.ADMIN_KEY;
  if (!adminKey) return;

  const incomingHeaders = await headers();
  const incoming = incomingHeaders.get("x-admin-key");

  if (incoming !== adminKey) {
    throw new Error("UNAUTHORIZED");
  }
}

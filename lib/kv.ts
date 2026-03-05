import { neon } from "@neondatabase/serverless";

let tableReady = false;

function getSQL() {
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) {
    throw new Error("DATABASE_URL is not set.");
  }
  return neon(databaseUrl);
}

async function ensureTable() {
  if (tableReady) return;

  const sql = getSQL();
  await sql`
    CREATE TABLE IF NOT EXISTS emails (
      id SERIAL PRIMARY KEY,
      email TEXT UNIQUE NOT NULL,
      source TEXT DEFAULT 'unknown',
      site TEXT DEFAULT 'unknown',
      created_at TIMESTAMPTZ DEFAULT NOW()
    )
  `;

  await sql`
    ALTER TABLE emails
    ADD COLUMN IF NOT EXISTS site TEXT DEFAULT 'unknown'
  `;

  tableReady = true;
}

export async function saveEmail(
  email: string,
  source: string,
  site: string
): Promise<void> {
  await ensureTable();
  const sql = getSQL();
  await sql`
    INSERT INTO emails (email, source, site)
    VALUES (${email}, ${source}, ${site})
    ON CONFLICT (email) DO NOTHING
  `;
}

export async function getAllEmails() {
  await ensureTable();
  const sql = getSQL();
  return sql`
    SELECT id, email, source, site, created_at as "createdAt"
    FROM emails
    ORDER BY created_at DESC
  `;
}

export async function getEmailCount(): Promise<number> {
  await ensureTable();
  const sql = getSQL();
  const rows = await sql`SELECT COUNT(*)::int as count FROM emails`;
  return rows[0]?.count ?? 0;
}

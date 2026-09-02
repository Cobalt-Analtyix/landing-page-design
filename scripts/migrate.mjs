// One-off migration runner: applies db/schema.sql to $DATABASE_URL.
// Usage:  DATABASE_URL="postgres://..." node scripts/migrate.mjs
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

import { Pool } from "@neondatabase/serverless";

const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
  console.error("DATABASE_URL is not set.");
  process.exit(1);
}

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const sql = await readFile(join(root, "db", "schema.sql"), "utf8");

const pool = new Pool({ connectionString });
try {
  await pool.query(sql);
  const { rows } = await pool.query(
    "select table_name from information_schema.tables where table_schema = 'public' order by table_name",
  );
  console.log("Applied db/schema.sql. Public tables now:");
  for (const row of rows) console.log("  -", row.table_name);
} finally {
  await pool.end();
}

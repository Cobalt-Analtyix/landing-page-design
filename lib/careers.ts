import { getSql } from "@/lib/db";

export type Job = {
  slug: string;
  title: string;
  type: string;
  experience: string;
  summary: string;
  about: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave: string[];
  perks: string[];
};

const columns = `slug, title, type, experience, summary, about, responsibilities, requirements,
  nice_to_have as "niceToHave", perks`;

export async function getJobs() {
  const sql = getSql();
  return (await sql.query(
    `select ${columns} from jobs where is_open order by created_at desc`,
  )) as Job[];
}

export async function getJob(slug: string) {
  const sql = getSql();
  const rows = (await sql.query(`select ${columns} from jobs where is_open and slug = $1`, [slug])) as Job[];
  return rows[0];
}

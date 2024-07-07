import { sql } from "@vercel/postgres";

export async function load({ params, locals }) {
  return {
    content: await sql`SELECT * from names where user_id='${locals.user}'`
  }
}

import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";

function connect(url: string) {
  return drizzle(neon(url), { schema });
}

type Database = ReturnType<typeof connect>;

let database: Database | null = null;
let connectedUrl: string | null = null;

export function getDb(): Database | null {
  const url = process.env.DATABASE_URL?.trim();
  if (!url) return null;
  if (!database || connectedUrl !== url) {
    database = connect(url);
    connectedUrl = url;
  }
  return database;
}

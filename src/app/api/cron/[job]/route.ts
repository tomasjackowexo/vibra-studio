import { NextResponse } from "next/server";
import { hasDatabase } from "@/lib/database";

const jobs = new Set(["reminders", "no-shows"]);

export async function GET(request: Request, context: { params: Promise<{ job: string }> }) {
  const { job } = await context.params;
  if (!jobs.has(job)) {
    return NextResponse.json({ ok: false }, { status: 404 });
  }

  const secret = process.env.CRON_SECRET?.trim();
  if (secret) {
    const header = request.headers.get("authorization");
    if (header !== `Bearer ${secret}`) {
      return NextResponse.json({ ok: false }, { status: 401 });
    }
  }

  if (!hasDatabase()) {
    return NextResponse.json({ ok: true, skipped: true });
  }

  return NextResponse.json({ ok: true, skipped: true });
}

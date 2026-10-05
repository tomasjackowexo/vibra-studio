"use server";

import { z } from "zod";
import { inquiries, subscribers, testResults } from "@/db/schema";
import { getDb } from "@/db";

const pendingMessage = "Túto funkciu ešte pripravujeme. Údaje z formulára sú zapísané v serverovom logu, aby sa nestratili.";

export type FormState = {
  status: "idle" | "error" | "pending" | "saved";
  message: string;
};

const emailField = z.string().trim().email().max(200);

function text(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value : "";
}

export async function submitInquiry(_previous: FormState, formData: FormData): Promise<FormState> {
  const parsed = z
    .object({
      name: z.string().trim().min(1).max(120),
      email: emailField,
      phone: z.string().trim().max(40),
      message: z.string().trim().min(1).max(4000),
      category: z.string().trim().max(80),
    })
    .safeParse({
      name: text(formData, "name"),
      email: text(formData, "email"),
      phone: text(formData, "phone"),
      message: text(formData, "message"),
      category: text(formData, "category"),
    });

  if (!parsed.success) {
    return { status: "error", message: "Skontrolujte meno, e-mail a text správy." };
  }

  const db = getDb();
  if (!db) {
    console.info("[inquiry] no database, logged only", parsed.data);
    return { status: "pending", message: pendingMessage };
  }

  await db.insert(inquiries).values({
    name: parsed.data.name,
    email: parsed.data.email,
    phone: parsed.data.phone || null,
    message: parsed.data.category
      ? `[${parsed.data.category}] ${parsed.data.message}`
      : parsed.data.message,
  });

  return { status: "saved", message: "Správa je odoslaná. Ozveme sa." };
}

export async function submitNewsletter(_previous: FormState, formData: FormData): Promise<FormState> {
  const parsed = emailField.safeParse(text(formData, "email"));
  if (!parsed.success) {
    return { status: "error", message: "Zadajte platný e-mail." };
  }

  const db = getDb();
  if (!db) {
    console.info("[newsletter] no database, logged only", { email: parsed.data });
    return { status: "pending", message: pendingMessage };
  }

  await db.insert(subscribers).values({ email: parsed.data }).onConflictDoNothing();
  return { status: "saved", message: "Odber je zapísaný." };
}

export async function submitStressTest(_previous: FormState, formData: FormData): Promise<FormState> {
  const parsed = emailField.safeParse(text(formData, "email"));
  if (!parsed.success) {
    return { status: "error", message: "Zadajte platný e-mail." };
  }

  const payload = { email: parsed.data };
  const db = getDb();
  if (!db) {
    console.info("[stress-test] no database, logged only", payload);
    return { status: "pending", message: pendingMessage };
  }

  await db.insert(testResults).values({
    email: parsed.data,
    answers: payload,
    summary: null,
  });

  return { status: "saved", message: "Test je zapísaný." };
}

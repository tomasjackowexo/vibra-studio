import { existsSync, readFileSync } from "node:fs";
import { eq } from "drizzle-orm";
import { services as serviceContent, sessionPackage } from "../content/home";
import { getDb } from "./index";
import { availabilityRules, packages, services } from "./schema";

function loadEnvFile() {
  if (!existsSync(".env")) return;

  for (const line of readFileSync(".env", "utf8").split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const separator = trimmed.indexOf("=");
    if (separator === -1) continue;

    const key = trimmed.slice(0, separator).trim();
    let value = trimmed.slice(separator + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    if (process.env[key] === undefined) process.env[key] = value;
  }
}

async function seed() {
  loadEnvFile();
  const db = getDb();

  if (!db) {
    console.error("DATABASE_URL nie je nastavené. Seed sa nespustil.");
    process.exit(1);
  }

  for (const [index, service] of serviceContent.entries()) {
    await db
      .insert(services)
      .values({
        slug: service.slug,
        name: service.name,
        description: service.summary,
        durationMin: service.durationMin,
        priceCents: service.priceCents,
        sortOrder: index,
      })
      .onConflictDoUpdate({
        target: services.slug,
        set: {
          name: service.name,
          description: service.summary,
          durationMin: service.durationMin,
          priceCents: service.priceCents,
          sortOrder: index,
          isActive: true,
          updatedAt: new Date(),
        },
      });
  }

  const regular = await db
    .select({ id: services.id })
    .from(services)
    .where(eq(services.slug, "bezne-sedenie"))
    .limit(1);

  await db
    .insert(packages)
    .values({
      slug: sessionPackage.slug,
      name: sessionPackage.name,
      description: sessionPackage.summary,
      serviceId: regular[0]?.id,
      sessions: sessionPackage.sessions ?? 5,
      priceCents: sessionPackage.priceCents,
      sortOrder: 0,
    })
    .onConflictDoUpdate({
      target: packages.slug,
      set: {
        name: sessionPackage.name,
        description: sessionPackage.summary,
        serviceId: regular[0]?.id,
        sessions: sessionPackage.sessions ?? 5,
        priceCents: sessionPackage.priceCents,
        isActive: true,
        updatedAt: new Date(),
      },
    });

  for (const weekday of [1, 2, 3, 4, 5]) {
    await db
      .insert(availabilityRules)
      .values({
        weekday,
        startTime: "09:00:00",
        endTime: "18:00:00",
      })
      .onConflictDoUpdate({
        target: availabilityRules.weekday,
        set: {
          startTime: "09:00:00",
          endTime: "18:00:00",
          isActive: true,
        },
      });
  }

  console.log("Seed dokončený: služby, balíček a rozvrh Po–Pi 9:00–18:00.");
}

seed().catch((error: unknown) => {
  console.error(error);
  process.exit(1);
});

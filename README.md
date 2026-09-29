# VIBRA

Web frekvenčného štúdia VIBRA. Rezervácie, cenník a obsah sa budú neskôr napájať na databázu. Teraz beží lokálne aj bez nej.

## Spustenie

```bash
npm install
npm run dev
```

Aplikácia je na [http://localhost:3000](http://localhost:3000).

Databáza nie je potrebná. Keď bude pripravená Neon Postgres, skopírujte `.env.example` do `.env` a doplňte `DATABASE_URL`.

```bash
npm run db:generate
npm run db:migrate
npm run db:seed
```

`db:seed` zapíše služby, balíček 5 sedení a rozvrh pondelok až piatok 9:00–18:00. Bez `DATABASE_URL` sa nespustí a aplikáciu neshodí.

## Štruktúra

```text
src/app            stránky (úvod, rezervácia, právne texty)
src/components/ui  tlačidlá, karty, accordion, marquee, reveal
src/components/layout  navigácia, päta, logo, mobilné CTA
src/components/home    sekcie úvodnej stránky
src/content        texty oddelené od komponentov
src/db             Drizzle schéma, pripojenie a seed
src/lib            cn() a formátovanie ceny
```

Texty úvodu sú v `src/content/home.ts`. Navigácia, päta a kontakt sú v `src/content/site.ts`. Kontaktné údaje sú zatiaľ zástupné.

## Čo zatiaľ nie je zapojené

- online rezervácia (stránka `/rezervacia` je pripravená len ako nadpis)
- odosielanie newsletteru
- pripojenie na databázu, kým chýba `DATABASE_URL`

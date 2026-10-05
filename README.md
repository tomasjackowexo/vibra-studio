# VIBRA

Web frekvenčného štúdia VIBRA. Rezervácie, cenník a obsah sa budú neskôr napájať na databázu. Teraz beží lokálne aj bez nej.

## Spustenie

```bash
npm install
npm run dev
```

Aplikácia je na [http://localhost:3000](http://localhost:3000).

Databáza nie je potrebná. Žiadna premenná prostredia nie je povinná: build aj runtime prejdú bez `DATABASE_URL`.

| Premenná | Úloha |
| --- | --- |
| `DATABASE_URL` | Voliteľná. Neon Postgres. Bez nej nie je online rezervácia, admin ani zápis formulárov do databázy. |
| `NEXT_PUBLIC_SITE_URL` | Voliteľná. Kanonická adresa pre SEO. Predvolene `http://localhost:3000`. |
| `AUTH_SECRET` | Voliteľná. Budúce prihlásenie administrátora. |
| `ADMIN_EMAIL`, `ADMIN_PASSWORD` | Voliteľné. Údaje administrátora, kým nie je admin zapojený. |
| `NOTIFY_EMAIL` | Voliteľná. Schránka na upozornenia zo štúdia. |
| `RESEND_API_KEY`, `EMAIL_FROM` | Voliteľné. E-maily sa zatiaľ neodosielajú. |
| `STUDIO_TIMEZONE` | Voliteľná. Predvolene Európa/Bratislava v aplikácii, v príklade `Europe/Bratislava`. |
| `CRON_SECRET` | Voliteľná. Ak je nastavená, `/api/cron/reminders` a `/api/cron/no-shows` vyžadujú `Authorization: Bearer`. |

`DATABASE_URL` na Vercel zatiaľ nepridávajte. Keď bude pripravená Neon Postgres, skopírujte `.env.example` do `.env.local` a doplňte ju.

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

- online rezervácia: bez `DATABASE_URL` stránka `/rezervacia` ukáže, že rezervácie spúšťame čoskoro
- zápis kontaktného formulára, newsletteru a testu do databázy: formulár sa zobrazí a po odoslaní vypíše, že funkcia sa pripravuje
- administrácia: `/admin` bez databázy len oznámi, že bude dostupná po jej pripojení
- pripojenie na databázu, kým chýba `DATABASE_URL`

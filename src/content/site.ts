export const studio = {
  name: "VIBRA",
  tagline: "frekvenčné štúdio",
  city: "Bratislava",
  email: "[e-mail]",
  phone: "[+421 9xx xxx xxx]",
  address: "[adresa prevádzky]",
  hours: "[Po – Pi 9:00 – 18:00]",
  company: "[obchodné meno · IČO · sídlo]",
} as const;

export const navItems = [
  { href: "/#metoda", label: "Metóda" },
  { href: "/#prichadzate", label: "S čím prichádzate" },
  { href: "/#sedenie", label: "Sedenie" },
  { href: "/#cennik", label: "Cenník" },
  { href: "/#o-nas", label: "O nás" },
  { href: "/#otazky", label: "Otázky" },
] as const;

export const bookingCta = {
  href: "/rezervacia",
  label: "Rezervovať",
} as const;

export const footer = {
  blurb:
    "Frekvenčné sedenie je doplnková wellness služba. Nie je zdravotnou starostlivosťou, nie je určené na diagnostiku ani liečbu ochorení a nenahrádza odbornú lekársku pomoc.",
  trademark: "BICOM optima® je registrovaná ochranná známka spoločnosti REGUMED GmbH.",
  newsletter: {
    label: "Newsletter",
    title: "Občasný list zo štúdia",
    text: "Termíny a novinky. Nič, čo by ste museli hneď otvoriť.",
    placeholder: "váš e-mail",
    button: "Chcem odber",
    note: "Odosielanie zapneme neskôr.",
  },
  legal: [
    { href: "/ochrana-sukromia", label: "Ochrana osobných údajov" },
    { href: "/obchodne-podmienky", label: "Obchodné podmienky" },
  ],
} as const;

export const legalPages = {
  privacy: {
    title: "Ochrana osobných údajov",
    text: "Text o spracúvaní osobných údajov pripravujeme. Dovtedy nás v prípade otázok kontaktujte.",
  },
  terms: {
    title: "Obchodné podmienky",
    text: "Obchodné podmienky rezervácií a sedení pripravujeme spolu s online rezerváciou.",
  },
} as const;

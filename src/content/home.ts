/**
 * Texty úvodnej stránky, prenesené z vibra_2.html.
 * Ceny a skladba služieb sú upravené podľa zadania.
 * Kontaktné údaje ostávajú zástupné, ako v predlohe.
 */

export type Offer = {
  slug: string;
  name: string;
  summary: string;
  durationMin: number;
  durationLabel: string;
  priceCents: number;
  sessions?: number;
  featured?: boolean;
  badge?: string;
  points: string[];
};

export const hero = {
  label: "BICOM optima® · frekvenčné sedenie",
  title: "Nalaďte sa na",
  accent: "pokoj.",
  perex:
    "Hodina ticha pre telo aj myseľ. Ľahnete si, vydýchnete a prístroj BICOM optima® pracuje, kým vy odpočívate. Bez ihiel, bez bolesti.",
  primaryCta: "Vybrať termín",
  secondaryCta: "Cenník od 75 €",
  chips: [
    { strong: "60–120", text: "minút pre vás" },
    { strong: "Bez", text: "ihiel a bolesti" },
    { strong: "Hotovosť", text: "alebo faktúra" },
  ],
};

export const marqueeItems = [
  "Bez ihiel",
  "Bez bolesti",
  "60 minút ticha",
  "BICOM optima®",
  "Čas len pre vás",
  "Tlmené svetlo a deka",
];

export const method = {
  id: "metoda",
  label: "Metóda",
  title: "Frekvencie, ticho",
  accent: "a vy.",
  perex:
    "Počas sedenia ležíte oblečení na pohodlnom lôžku. Mäkké elektródy sú priložené na ruky a chodidlá a prístroj pracuje s jemnými elektromagnetickými signálmi.",
  device: {
    id: "o-nas",
    label: "O prístroji",
    title: "BICOM optima® od nemeckého výrobcu REGUMED",
    text: "Certifikovaný prístroj, s ktorým pracujú terapeuti v celej Európe. U nás ho využívame na relaxačné sedenia v tichom prostredí.",
  },
  tiles: [
    {
      id: "prichadzate",
      label: "Dĺžka",
      title: "60",
      unit: "min",
      text: "bežné sedenie, vstupné stretnutie 120 min",
    },
    {
      label: "Pocit",
      title: "Nič necítite, okrem pokoja",
      text: "Signály sú také jemné, že mnohí klienti počas sedenia zaspia.",
    },
    {
      label: "Prostredie",
      title: "Deka, čaj, tlmené svetlo",
      text: "Žiadny zhon. Po sedení máte čas prebrať sa a vydýchnuť.",
    },
    {
      label: "Upozornenie",
      title: "Doplnok, nie náhrada",
      text: "Sedenie je wellness služba a nenahrádza vyšetrenie ani liečbu u lekára.",
    },
  ],
};

export const process = {
  id: "sedenie",
  label: "Priebeh",
  title: "Vaša hodina",
  accent: "u nás.",
  steps: [
    {
      number: "01",
      title: "Privítanie",
      text: "Pri čaji sa porozprávame, ako sa cítite a čo od sedenia očakávate.",
    },
    {
      number: "02",
      title: "Pohodlie",
      text: "Ľahnete si na lôžko s dekou. Priložíme elektródy na ruky a chodidlá.",
    },
    {
      number: "03",
      title: "Sedenie",
      text: "Prístroj pracuje, vy odpočívate. Ticho alebo jemná hudba.",
    },
    {
      number: "04",
      title: "Návrat",
      text: "Pohár vody a chvíľa na prebratie pred návratom do dňa.",
    },
  ],
};

export const services: Offer[] = [
  {
    slug: "vstupne-stretnutie",
    name: "Vstupné stretnutie",
    summary: "Prvé stretnutie s rozhovorom, dotazníkom a prvým sedením.",
    durationMin: 120,
    durationLabel: "120 min",
    priceCents: 11000,
    points: [
      "podrobný rozhovor o tom, ako sa cítite a čo očakávate",
      "dotazník a prejdenie kontraindikácií",
      "zoznámenie s prístrojom a prvé sedenie",
      "odporúčanie, ako často sedenia opakovať",
    ],
  },
  {
    slug: "bezne-sedenie",
    name: "Bežné sedenie",
    summary: "Hodina s prístrojom BICOM optima®.",
    durationMin: 60,
    durationLabel: "60 min",
    priceCents: 7500,
    featured: true,
    badge: "Najčastejšie",
    points: [
      "krátky rozhovor o tom, ako sa máte od minulého sedenia",
      "60 minút s prístrojom BICOM optima®",
      "čaj, voda a čas na oddych po sedení",
    ],
  },
  {
    slug: "stop-fajceniu",
    name: "Program Stop fajčeniu",
    summary: "Sedenie zamerané na návyk. Nie je to liečba ani náhrada odbornej pomoci.",
    durationMin: 60,
    durationLabel: "60 min",
    priceCents: 8000,
    points: [
      "rozhovor o návyku a o tom, čo od sedenia očakávate",
      "60 minút s prístrojom BICOM optima®",
      "doplnková wellness služba, nie liečba",
    ],
  },
];

export const sessionPackage: Offer = {
  slug: "balik-5-sedeni",
  name: "Balíček 5 sedení",
  summary: "Päť bežných sedení. 330 € namiesto 375 € pri jednorazovej cene.",
  durationMin: 60,
  durationLabel: "5× 60 min",
  priceCents: 33000,
  sessions: 5,
  points: [
    "päť bežných sedení s prístrojom BICOM optima®",
    "330 € namiesto 375 € pri jednorazovej cene",
    "platí na bežné sedenie, 60 minút",
  ],
};

export const pricing = {
  id: "cennik",
  label: "Cenník",
  title: "Jasné ceny.",
  accent: "Bez členstva.",
  perex: "Platíte za sedenie. Vernostný program zatiaľ neponúkame.",
  payments: ["Platba v hotovosti v štúdiu", "Bankový prevod na faktúru"],
};

export const faq = {
  id: "otazky",
  label: "Otázky",
  title: "Pred prvým",
  accent: "sedením.",
  items: [
    {
      question: "Prečo začať vstupným stretnutím?",
      answer:
        "Pri prvej návšteve si nájdeme viac času. Porozprávame sa, prejdeme dotazník, vysvetlíme priebeh a absolvujete prvé sedenie.",
    },
    {
      question: "Bolí to?",
      answer:
        "Nie. Elektródy sú mäkké a signály jemné. Väčšina ľudí necíti nič a mnohí počas sedenia zaspia.",
    },
    {
      question: "Nahrádza sedenie návštevu lekára?",
      answer:
        "Nie. Ide o doplnkovú wellness službu na oddych a uvoľnenie. Ak máte zdravotné ťažkosti, obráťte sa na lekára a v jeho liečbe pokračujte.",
    },
    {
      question: "Kto by sedenie absolvovať nemal?",
      answer:
        "Tehotné ženy, ľudia s kardiostimulátorom alebo iným implantovaným elektronickým prístrojom a ľudia s epilepsiou. Ak si nie ste istí, poraďte sa najprv s lekárom.",
    },
    {
      question: "Ako môžem platiť?",
      answer: "V hotovosti priamo v štúdiu alebo bankovým prevodom na faktúru.",
    },
    {
      question: "Ako sa rezervuje termín?",
      answer:
        "Online rezerváciu práve pripravujeme. Dovtedy zavolajte alebo napíšte a termín dohodneme v otváracích hodinách.",
    },
  ],
};

export const contact = {
  id: "kontakt",
  label: "Kontakt",
  title: "Tešíme sa",
  accent: "na vás.",
  perex: "Sedenia sú len na objednávku. Zavolajte, napíšte alebo si vyberte termín online.",
  cta: "Vybrať termín",
};

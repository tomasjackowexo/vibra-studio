import { imageAlts, images } from "@/content/images";

export const topicsIntro = {
  label: "S čím prichádzate",
  title: "S čím k nám ľudia",
  accent: "prichádzajú.",
  perex: "Ľudia k nám nechodia s diagnózou, ale s pocitom. Že nevedia vypnúť, zle spia alebo chcú konečne niečo zmeniť.",
};

export const howItWorks = {
  label: "Ako to prebieha",
  title: "Od napätia",
  accent: "k pokoju.",
  perex: "Posuňte vlnu a sledujte, ako sa upokojuje. Presne o toto sa počas hodiny v štúdiu snažíme aj my.",
  tension: "napätie",
  calm: "pokoj",
  steps: [
    {
      title: "Porozprávame sa",
      text: "Na začiatku sa pri čaji pozastavíme. Poviete nám, ako sa máte a čo od sedenia čakáte.",
    },
    {
      title: "Prístroj pracuje",
      text: "Ležíte oblečení pod dekou. BICOM optima® pracuje s jemnými signálmi, vy len dýchate a odpočívate.",
    },
    {
      title: "Vrátite sa k sebe",
      text: "Po sedení máte čas prebrať sa. Pohár vody, pár slov a návrat do dňa bez zhonu.",
    },
  ],
};

export const sessionStepImages = [
  { src: images.tea, alt: imageAlts.tea },
  { src: images.linen, alt: imageAlts.linen },
  { src: images.light, alt: imageAlts.light },
  { src: images.calm, alt: imageAlts.calm },
];

export const therapist = {
  label: "Kto sedenie vedie",
  title: "Pri vás bude",
  accent: "Karol.",
  quote: "Nechcem nikomu sľubovať zázraky. Chcem, aby ste odchádzali pokojnejší, než ste prišli, a aby ste vedeli, prečo sa k nám oplatí vrátiť.",
  name: "Karol",
  role: "vedie sedenia",
  image: images.hands,
  imageAlt: imageAlts.hands,
  certificates: [
    "Zaškolenie na BICOM optima®",
    "Prax pod vedením Petra Mariša",
    "Priebežné vzdelávanie v biorezonancii",
  ],
};

export const leadMagnet = {
  label: "Test",
  title: "Ako ste na tom so stresom?",
  text: "Desať otázok, dve minúty. Zistíte, koľko napätia v sebe nosíte, a výsledok vám pošleme e-mailom aj s tipmi, čo s ním.",
  cta: "Test stresu",
  href: "/test",
};

export const finalCta = {
  title: "Hodina, ktorá patrí",
  accent: "len vám.",
  text: "Vyberte si termín online alebo nám zavolajte. Prvé stretnutie je dlhšie, aby sme sa spoznali a nikam sa neponáhľali.",
};

export const experiencesIntro = {
  label: "Skúsenosti",
  title: "Čo hovoria",
  accent: "klienti.",
  perex: "Nepíšeme za nich. Toto sú slová ľudí, ktorí u nás strávili svoju hodinu a boli ochotní sa podeliť o skúsenosť.",
};

export const sessionPageIntro = {
  gallery: [images.linen, images.interior, images.light, images.tea],
  galleryAlts: [imageAlts.linen, imageAlts.interior, imageAlts.light, imageAlts.tea],
};

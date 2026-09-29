import { imageAlts, images } from "@/content/images";

export const topicsIntro = {
  label: "S čím prichádzate",
  title: "[TEXT: nadpis benta tém, 3–6 slov]",
  accent: "[TEXT: akcent, 1–2 slová]",
  perex: "[TEXT: perex k témam, 18–28 slov]",
};

export const howItWorks = {
  label: "Ako to prebieha",
  title: "[TEXT: nadpis troch krokov, 3–6 slov]",
  accent: "[TEXT: akcent, 1–2 slová]",
  perex: "[TEXT: perex k vlne napätie a pokoj, 18–28 slov]",
  tension: "napätie",
  calm: "pokoj",
  steps: [
    {
      title: "[TEXT: krok 1, 2–4 slová]",
      text: "[TEXT: popis kroku 1, 15–25 slov]",
    },
    {
      title: "[TEXT: krok 2, 2–4 slová]",
      text: "[TEXT: popis kroku 2, 15–25 slov]",
    },
    {
      title: "[TEXT: krok 3, 2–4 slová]",
      text: "[TEXT: popis kroku 3, 15–25 slov]",
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
  title: "[TEXT: nadpis predstavenia, 3–6 slov]",
  accent: "[TEXT: akcent, 1–2 slová]",
  quote: "[TEXT: citát terapeuta, 18–30 slov]",
  name: "[TEXT: meno, 2 slová]",
  role: "[TEXT: rola v štúdiu, 2–5 slov]",
  image: images.hands,
  imageAlt: imageAlts.hands,
  certificates: [
    "[TEXT: názov certifikátu, 3–6 slov]",
    "[TEXT: názov certifikátu, 3–6 slov]",
    "[TEXT: názov certifikátu, 3–6 slov]",
  ],
};

export const leadMagnet = {
  label: "Test",
  title: "[TEXT: nadpis testu stresu, 4–8 slov]",
  text: "[TEXT: perex testu, 18–28 slov]",
  cta: "Test stresu",
  href: "/test",
};

export const finalCta = {
  title: "[TEXT: záverečný nadpis, 3–6 slov]",
  accent: "[TEXT: akcent, 1–2 slová]",
  text: "[TEXT: záverečná veta, 15–25 slov]",
};

export const experiencesIntro = {
  label: "Skúsenosti",
  title: "[TEXT: nadpis referencií, 3–6 slov]",
  accent: "[TEXT: akcent, 1–2 slová]",
  perex: "[TEXT: perex referencií, 18–28 slov]",
};

export const sessionPageIntro = {
  gallery: [images.linen, images.interior, images.light, images.tea],
  galleryAlts: [imageAlts.linen, imageAlts.interior, imageAlts.light, imageAlts.tea],
};

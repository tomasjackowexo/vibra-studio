import { faq as homeFaq } from "@/content/home";

export const faqCategories = [
  "Prvé sedenie",
  "Priebeh",
  "Bezpečnosť",
  "Ceny a platby",
  "O metóde",
] as const;

export type FaqCategory = (typeof faqCategories)[number];

export type FaqEntry = {
  question: string;
  answer: string;
  category: FaqCategory;
};

const [first, pain, doctor, who, pay, booking] = homeFaq.items;

export const faqEntries: FaqEntry[] = [
  { ...first, category: "Prvé sedenie" },
  { ...booking, category: "Prvé sedenie" },
  { ...pain, category: "Priebeh" },
  {
    category: "Priebeh",
    question: "[TEXT: otázka o priebehu sedenia, 6–12 slov]",
    answer: "[TEXT: odpoveď o priebehu, 30–50 slov]",
  },
  { ...doctor, category: "Bezpečnosť" },
  { ...who, category: "Bezpečnosť" },
  { ...pay, category: "Ceny a platby" },
  {
    category: "Ceny a platby",
    question: "[TEXT: otázka o balíčku alebo poukážke, 6–12 slov]",
    answer: "[TEXT: odpoveď o cene, 25–40 slov]",
  },
  {
    category: "O metóde",
    question: "[TEXT: otázka o prístroji BICOM optima®, 6–12 slov]",
    answer: "[TEXT: odpoveď o metóde, 30–50 slov]",
  },
  {
    category: "O metóde",
    question: "[TEXT: otázka o tom, čo sedenie nie je, 6–12 slov]",
    answer: "[TEXT: odpoveď s disclaimerom, 30–50 slov]",
  },
];

export const faqPreview = faqEntries.slice(0, 6);

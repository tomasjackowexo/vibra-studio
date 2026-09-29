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
    question: "Čo mám robiť počas sedenia?",
    answer: "Nič. Ležíte oblečení na pohodlnom lôžku, prikrytí dekou, s mäkkými elektródami na rukách a chodidlách. Môžete zavrieť oči, počúvať tichú hudbu alebo zaspať. Mnohí klienti to presne tak aj robia.",
  },
  { ...doctor, category: "Bezpečnosť" },
  { ...who, category: "Bezpečnosť" },
  { ...pay, category: "Ceny a platby" },
  {
    category: "Ceny a platby",
    question: "Oplatí sa kúpiť balíček alebo darčekovú poukážku?",
    answer: "Balíček 5 sedení stojí 330 € namiesto 375 €, platí 6 mesiacov a hodí sa, ak chcete chodiť pravidelne. Darčekovú poukážku pripravíme na ľubovoľnú službu, stačí nám napísať.",
  },
  {
    category: "O metóde",
    question: "Čo je BICOM optima® za prístroj?",
    answer: "Ide o prístroj nemeckej spoločnosti REGUMED, ktorá vyvíja biorezonančné zariadenia od 70. rokov. Je certifikovaný ako zdravotnícka pomôcka rizikovej triedy IIa a používa ho viac ako 10 000 terapeutov v 90 krajinách.",
  },
  {
    category: "O metóde",
    question: "Čo sedenie nie je?",
    answer: "Nie je to lekárske vyšetrenie, diagnostika ani liečba. Neurobíme vám diagnózu a nenahradíme lekára ani lieky. Ponúkame doplnkovú wellness službu, hodinu pokoja a uvoľnenia. Ak máte zdravotné ťažkosti, obráťte sa na lekára.",
  },
];

export const faqPreview = faqEntries.slice(0, 6);

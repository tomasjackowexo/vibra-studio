export type Testimonial = {
  quote: string;
  author: string;
  detail: string;
};

// Skutočné referencie doplníme so súhlasom klientov. Kým je pole prázdne, sekcie referencií sa nezobrazujú.
export const testimonials: Testimonial[] = [];

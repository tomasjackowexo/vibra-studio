const crop = "auto=format&fit=crop&w=1600&q=80";

export const images = {
  linen: `https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?${crop}`,
  tea: `https://images.unsplash.com/photo-1544787219-7f47ccb76574?${crop}`,
  interior: `https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?${crop}`,
  light: `https://images.unsplash.com/photo-1600210492493-0946911123ea?${crop}`,
  hands: `https://images.unsplash.com/photo-1519824145371-296894a0daa9?${crop}`,
  calm: `https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?${crop}`,
} as const;

export const imageAlts = {
  linen: "Svetlé ľanové plátno v mäkkom dennom svetle",
  tea: "Šálka bylinkového čaju na drevenom stolíku",
  interior: "Pokojný interiér v teplých prírodných tónoch",
  light: "Mäkké svetlo dopadajúce cez záves do izby",
  hands: "Uvoľnené ruky položené na mäkkej deke",
  calm: "Tichý priestor s lôžkom pripravený na oddych",
} as const;

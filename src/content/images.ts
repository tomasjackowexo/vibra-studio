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
  linen: "[TEXT: popis fotografie plátna, 6–10 slov]",
  tea: "[TEXT: popis fotografie čaju, 6–10 slov]",
  interior: "[TEXT: popis pokojného interiéru, 6–10 slov]",
  light: "[TEXT: popis mäkkého svetla, 6–10 slov]",
  hands: "[TEXT: popis fotografie rúk, 6–10 slov]",
  calm: "[TEXT: popis pokojného priestoru, 6–10 slov]",
} as const;

export const adLandingPages = [
  "/s-cim-prichadzate/stres",
  "/s-cim-prichadzate/spanok-a-unava",
  "/s-cim-prichadzate/fajcenie",
  "/s-cim-prichadzate/navyky",
] as const;

export function assertAdLandings(paths: string[]) {
  const expected = [...adLandingPages].sort().join("|");
  const actual = [...paths].sort().join("|");
  if (expected !== actual) {
    throw new Error(`Ad landing pages are out of sync. Expected ${expected}, got ${actual}.`);
  }
}

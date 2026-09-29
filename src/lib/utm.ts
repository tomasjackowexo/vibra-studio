export const UTM_COOKIE = "vibra_utm";
export const UTM_MAX_AGE_SECONDS = 60 * 60 * 24 * 30;

export const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
] as const;

export type UtmKey = (typeof UTM_KEYS)[number];
export type UtmParams = Partial<Record<UtmKey, string>>;

export function readUtmFromSearchParams(params: URLSearchParams): UtmParams {
  const next: UtmParams = {};
  for (const key of UTM_KEYS) {
    const value = params.get(key)?.trim();
    if (value) next[key] = value.slice(0, 200);
  }
  return next;
}

export function parseUtmCookie(raw: string | undefined): UtmParams {
  if (!raw) return {};
  try {
    const parsed = JSON.parse(raw) as Record<string, unknown>;
    const next: UtmParams = {};
    for (const key of UTM_KEYS) {
      const value = parsed[key];
      if (typeof value === "string" && value.trim()) next[key] = value.slice(0, 200);
    }
    return next;
  } catch {
    return {};
  }
}

export function mergeUtm(current: UtmParams, incoming: UtmParams): UtmParams {
  return { ...current, ...incoming };
}

export function hasUtm(params: UtmParams) {
  return UTM_KEYS.some((key) => Boolean(params[key]));
}

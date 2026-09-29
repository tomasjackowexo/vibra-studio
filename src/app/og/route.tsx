import { ImageResponse } from "next/og";

export const runtime = "nodejs";

export function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = (searchParams.get("title") ?? "VIBRA").slice(0, 90);
  const eyebrow = (searchParams.get("eyebrow") ?? "frekvenčné štúdio").slice(0, 48);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#FAFAF9",
          padding: "72px",
          color: "#2E2E32",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 999,
              background: "#C2A062",
            }}
          />
          <div style={{ fontSize: 22, letterSpacing: 8 }}>VIBRA</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 18, letterSpacing: 4, color: "#8B8B90" }}>{eyebrow}</div>
          <div style={{ fontSize: 68, lineHeight: 1.02, letterSpacing: -2, maxWidth: 980 }}>{title}</div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}

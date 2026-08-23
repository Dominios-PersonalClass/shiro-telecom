import { ImageResponse } from "next/og";

import { siteConfig } from "@/config/site";

export const alt =
  "Shiro Telecom — soluciones tecnológicas para un mundo conectado";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  const colors = siteConfig.brand.colors;

  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          background: colors.night,
          color: colors.white,
          padding: "72px 84px",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: "44px",
            display: "flex",
            border: `1px solid ${colors.indigo}`,
            opacity: 0.72,
          }}
        />
        <div
          style={{
            position: "absolute",
            right: "-180px",
            top: "-200px",
            width: "590px",
            height: "590px",
            display: "flex",
            border: `2px solid ${colors.indigo}`,
            borderRadius: "999px",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: "48px",
            bottom: "105px",
            width: "320px",
            height: "1px",
            display: "flex",
            background: colors.indigo,
          }}
        />
        {[110, 230, 350].map((right) => (
          <div
            key={right}
            style={{
              position: "absolute",
              right: `${right}px`,
              bottom: "96px",
              width: "19px",
              height: "19px",
              display: "flex",
              border: `4px solid ${colors.mint}`,
              borderRadius: "999px",
              background: colors.night,
            }}
          />
        ))}

        <div style={{ display: "flex", flexDirection: "column", maxWidth: "820px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
            <div
              style={{
                width: "92px",
                height: "92px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: `2px solid ${colors.mint}`,
                borderRadius: "22px",
                background: colors.indigo,
                color: colors.white,
                fontSize: "58px",
                fontWeight: 700,
              }}
            >
              S
            </div>
            <div style={{ display: "flex", fontSize: "54px", fontWeight: 700 }}>
              {siteConfig.name}
            </div>
          </div>
          <div
            style={{
              width: "96px",
              height: "6px",
              display: "flex",
              marginTop: "52px",
              background: colors.mint,
            }}
          />
          <div
            style={{
              display: "flex",
              marginTop: "28px",
              fontSize: "64px",
              fontWeight: 700,
              lineHeight: 1.04,
              letterSpacing: "-2px",
            }}
          >
            Soluciones tecnológicas para un mundo conectado.
          </div>
          <div
            style={{
              display: "flex",
              marginTop: "34px",
              color: colors.mint,
              fontSize: "25px",
              fontWeight: 600,
            }}
          >
            Soporte · conectividad · seguridad · telecomunicaciones
          </div>
        </div>
      </div>
    ),
    size,
  );
}

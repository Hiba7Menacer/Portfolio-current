import { ImageResponse } from "next/og"

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

export const alt = "Hiba Menacer — Designer & Front-End Developer"

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px 90px",
          background: "linear-gradient(135deg, #58AFED 0%, #09314D 100%)",
          fontFamily: "Georgia, serif",
          color: "#ffffff",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <svg
            width="64"
            height="64"
            viewBox="0 0 24 24"
            fill="#ffffff"
            style={{ flexShrink: 0 }}
          >
            <path d="M12 0 L14.5 9.5 L24 12 L14.5 14.5 L12 24 L9.5 14.5 L0 12 L9.5 9.5 Z" />
          </svg>
          <div style={{ display: "flex", fontSize: "28px", opacity: 0.85 }}>
            Hiba Menacer · Portfolio
          </div>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: "96px",
            fontWeight: "bold",
            lineHeight: 1.1,
            marginTop: "36px",
          }}
        >
          HM<span style={{ color: "#9FD6FF" }}>.</span>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: "40px",
            marginTop: "20px",
            opacity: 0.9,
          }}
        >
          Designer &amp; Front-End Developer
        </div>
      </div>
    ),
    { ...size }
  )
}

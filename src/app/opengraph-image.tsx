import { ImageResponse } from "next/og";

export const alt = "Naung Naung, Full-Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#f8fafc",
          color: "#0f2744",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          padding: "72px",
          width: "100%",
        }}
      >
        <div
          style={{
            alignItems: "flex-start",
            background: "#ffffff",
            border: "1px solid #dbe3ed",
            borderRadius: "28px",
            boxShadow: "0 24px 70px rgba(15, 39, 68, 0.10)",
            display: "flex",
            flexDirection: "column",
            height: "100%",
            justifyContent: "center",
            padding: "68px 76px",
            position: "relative",
            width: "100%",
          }}
        >
          <div
            style={{
              background: "#165dad",
              borderRadius: "999px",
              height: "10px",
              marginBottom: "38px",
              width: "88px",
            }}
          />
          <div style={{ fontSize: "72px", fontWeight: 700, letterSpacing: "-3px" }}>
            Naung Naung
          </div>
          <div style={{ color: "#165dad", fontSize: "38px", fontWeight: 600, marginTop: "18px" }}>
            Full-Stack Developer
          </div>
          <div style={{ color: "#536273", fontSize: "25px", marginTop: "30px" }}>
            React · Next.js · Node.js · Laravel
          </div>
          <div
            style={{
              bottom: "64px",
              color: "#536273",
              fontSize: "22px",
              position: "absolute",
              right: "76px",
            }}
          >
            naungnaung.vercel.app
          </div>
        </div>
      </div>
    ),
    size,
  );
}

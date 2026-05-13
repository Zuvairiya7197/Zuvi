import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 76,
          color: "white",
          background:
            "radial-gradient(circle at 80% 20%, rgba(94,231,255,.34), transparent 360px), radial-gradient(circle at 20% 80%, rgba(139,92,246,.3), transparent 340px), #050507"
        }}
      >
        <div style={{ fontSize: 28, letterSpacing: 10, color: "#9eefff" }}>ZUVI STUDIO</div>
        <div style={{ marginTop: 34, maxWidth: 920, fontSize: 82, fontWeight: 700, lineHeight: 0.98 }}>
          Premium Graphic Design Portfolio
        </div>
        <div style={{ marginTop: 30, maxWidth: 780, fontSize: 30, color: "#d4d4dc" }}>
          Brand identity, UI UX, websites, social content, and motion systems.
        </div>
      </div>
    ),
    size
  );
}

import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

/** Favicon — monochrome "W4" mark, paper on ink. */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#141414",
          color: "#F4F1EB",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 14,
          fontWeight: 600,
          letterSpacing: -0.5,
          fontFamily: "monospace",
        }}
      >
        W4
      </div>
    ),
    { ...size },
  );
}

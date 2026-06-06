import { ImageResponse } from "next/og";
import { SITE } from "@/lib/config";

export const alt = `${SITE.name} · ${SITE.motto}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Site-wide Open Graph image — monochrome, ink on paper. */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#F4F1EB",
          color: "#141414",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "84px",
        }}
      >
        <div style={{ fontSize: 40, letterSpacing: 10, fontWeight: 600 }}>
          W4GZ
        </div>
        <div style={{ display: "flex", fontSize: 104, lineHeight: 1.04, maxWidth: 940 }}>
          Creates narratives worth living.
        </div>
        <div
          style={{
            fontSize: 27,
            letterSpacing: 5,
            textTransform: "uppercase",
            color: "#7A7872",
          }}
        >
          Writing4GenZ · Est. 2022 · Ho Chi Minh City
        </div>
      </div>
    ),
    { ...size },
  );
}

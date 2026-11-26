import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const alt = "Aethos Vision Labs — Websites, design, automation and content.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const logo = await readFile(path.join(process.cwd(), "public", "logo.png"));
  const logoData = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#08090b", color: "#f0f0ed", padding: "64px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
        {/* ImageResponse renders this embedded local asset into the social image. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoData} alt="" width={72} height={72} style={{ objectFit: "contain" }} />
        <span style={{ fontSize: 32 }}>Aethos Vision Labs</span>
      </div>
      <div style={{ display: "flex", fontSize: 68, letterSpacing: "-2px", lineHeight: 1.15, maxWidth: 1000 }}>
        Websites, design, automation and content for your business.
      </div>
      <div style={{ fontSize: 24, color: "#a5afbd" }}>www.aethoscompany.in</div>
    </div>,
    size,
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Figma Design Handoff Validator — Validate design-to-code accuracy automatically",
  description: "Compare Figma designs with live websites to detect spacing, color, and typography inconsistencies automatically."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="70ae5fed-fe3e-44ab-a0fa-4923f712a70c"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}

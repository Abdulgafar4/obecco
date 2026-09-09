import type { Metadata, Viewport } from "next";
import { SiteNav } from "@/components/SiteNav";
import "./industry.css";
import "./obecco-hover.css";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Obecco — We build software that moves",
    template: "%s — Obecco",
  },
  description:
    "Obecco designs and engineers digital products, websites, and software from idea to production.",
};

export const viewport: Viewport = {
  themeColor: "#f2f2f3",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteNav />
        <main
          data-ref="root"
          style={{
            fontFamily: "var(--font-body)",
            background: "var(--color-bg)",
            color: "var(--color-text)",
          }}
        >
          {children}
        </main>
      </body>
    </html>
  );
}

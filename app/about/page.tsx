import type { Metadata } from "next";
import { AboutPage } from "@/components/pages/AboutPage";
import { AboutMotion } from "@/components/motion/AboutMotion";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Obecco — an independent software company building products and client work.",
};

export default function Page() {
  return (
    <>
      <AboutPage />
      <AboutMotion />
    </>
  );
}

import type { Metadata } from "next";
import { HomePage } from "@/components/pages/HomePage";
import { HomeMotion } from "@/components/motion/HomeMotion";

export const metadata: Metadata = {
  title: {
    absolute: "Obecco — We build software that moves",
  },
};

export default function Page() {
  return (
    <>
      <HomePage />
      <HomeMotion />
    </>
  );
}

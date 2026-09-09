import type { Metadata } from "next";
import { ContactPage } from "@/components/pages/ContactPage";
import { PageMotion } from "@/components/motion/PageMotion";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a project with Obecco at hello@obecco.com.",
};

export default function Page() {
  return (
    <>
      <ContactPage />
      <PageMotion />
    </>
  );
}

import type { Metadata } from "next";
import { ServicesPage } from "@/components/pages/ServicesPage";
import { PageMotion } from "@/components/motion/PageMotion";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Website design, custom web applications, product engineering, UI/UX, e-commerce, and integrations from Obecco.",
};

export default function Page() {
  return (
    <>
      <ServicesPage />
      <PageMotion />
    </>
  );
}

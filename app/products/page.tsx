import type { Metadata } from "next";
import { ProductsPage } from "@/components/pages/ProductsPage";
import { ProductsMotion } from "@/components/motion/ProductsMotion";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Lien, ToolFerry, CleverJobs, and Clevermart — products built by Obecco.",
};

export default function Page() {
  return (
    <>
      <ProductsPage />
      <ProductsMotion />
    </>
  );
}

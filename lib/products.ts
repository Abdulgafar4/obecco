export type ProductStatus = "in-production" | "in-progress" | "in-development";

export type ProductFeature = {
  label: string;
  title?: string;
  description: string;
  delay?: number;
};

export type Product = {
  id: string;
  name: string;
  url: string;
  preview: string;
  tagline: string;
  description: string;
  shortDescription: string;
  homeDescription: string;
  status: ProductStatus;
  statusLabel: string;
  index: string;
  previewLabel: string;
  features?: ProductFeature[];
  steps?: ProductFeature[];
  statusNote?: string;
};

export const products: Record<string, Product> = {
  toolferry: {
    id: "toolferry",
    name: "ToolFerry",
    url: "https://toolferry.org/",
    preview: "/products/toolferry.png",
    tagline: "38 tools. One shell.",
    description:
      "A calm toolbox for downloads, conversions, and documents. Thirty-eight tools — downloaders, media converters, PDF utilities, and everyday helpers — gathered in one self-hosted shell. Nothing to install, no account required, files expire.",
    shortDescription:
      "Thirty-eight downloaders, converters, PDF, and document tools in one calm shell. No account, nothing kept.",
    homeDescription:
      "Thirty-eight downloaders, converters, PDF, and document tools in one calm shell. No account required.",
    status: "in-production",
    statusLabel: "Shipped / In production",
    index: "02",
    previewLabel: "toolferry.org",
    features: [
      {
        label: "Downloaders",
        description:
          "Save video and audio from ten platforms — single links or batches of 25.",
      },
      {
        label: "Media",
        description:
          "Convert, compress, trim, and rescale video, audio, and images.",
        delay: 70,
      },
      {
        label: "PDF",
        description: "Merge, split, protect, and convert documents both ways.",
        delay: 140,
      },
      {
        label: "Documents",
        description: "Text and document work, cleanly in the browser.",
        delay: 210,
      },
      {
        label: "Utilities",
        description: "QR, hashes, Base64, JSON, and metadata — the small daily stuff.",
        delay: 280,
      },
    ],
    statusNote: "Live at toolferry.org. New tools added on a rolling basis.",
  },
  lien: {
    id: "lien",
    name: "Lien",
    url: "https://joinlien.com/",
    preview: "/products/lien.png",
    tagline: "Verified. Curated. Quiet.",
    description:
      "A verified dating community for British Columbia. Every member passes identity verification before they can be introduced. A few curated introductions each day — selected for alignment, never for activity metrics. No infinite feeds, no public profiles.",
    shortDescription:
      "Verified dating for British Columbia. Identity-checked members, curated daily introductions — no infinite swiping.",
    homeDescription:
      "Verified dating for British Columbia. Identity checks, curated daily introductions, no infinite swiping.",
    status: "in-production",
    statusLabel: "Shipped / In production",
    index: "01",
    previewLabel: "joinlien.com",
    steps: [
      {
        label: "Step 01",
        title: "Apply",
        description:
          "A thoughtful application — about ten minutes, read by a person.",
      },
      {
        label: "Step 02",
        title: "Verify",
        description:
          "Identity confirmed before anyone enters the introduction pool.",
        delay: 80,
      },
      {
        label: "Step 03",
        title: "Meet",
        description:
          "Up to three curated introductions each morning, with a 48-hour window to respond.",
        delay: 160,
      },
    ],
    statusNote: "Live in British Columbia. Membership by application.",
  },
  clevermart: {
    id: "clevermart",
    name: "Clevermart",
    url: "",
    preview: "",
    tagline: "Modern commerce stack.",
    description:
      "A dropshipping store on a modern commerce stack — Next.js, Stripe, and a catalogue built to grow without a rebuild. Storefront and checkout are under construction now.",
    shortDescription: "Dropshipping store. Next.js, Stripe, and a modern commerce stack.",
    homeDescription: "Dropshipping store. Next.js, Stripe, and a modern commerce stack.",
    status: "in-progress",
    statusLabel: "In progress",
    index: "04",
    previewLabel: "Store / in build",
  },
  cleverjobs: {
    id: "cleverjobs",
    name: "CleverJobs",
    url: "https://cleverjobs.vercel.app/",
    preview: "/products/cleverjobs.png",
    tagline: "Find your perfect job match.",
    description:
      "A job discovery platform for candidates and employers. Search by title, location, and job type across thousands of openings — with company profiles, filters, and a clean interface built for people who want clarity, not clutter.",
    shortDescription:
      "Job discovery platform. Search by title, location, and type across thousands of openings.",
    homeDescription:
      "Job discovery platform. Search by title, location, and type across thousands of openings.",
    status: "in-production",
    statusLabel: "Shipped / In production",
    index: "03",
    previewLabel: "cleverjobs.vercel.app",
    features: [
      {
        label: "Search",
        description:
          "Filter by job title, keywords, company, location, and employment type.",
      },
      {
        label: "Companies",
        description: "Browse employer profiles and open roles in one place.",
        delay: 70,
      },
      {
        label: "Post",
        description: "Employers can publish listings directly from the platform.",
        delay: 140,
      },
    ],
    statusNote: "Live at cleverjobs.vercel.app.",
  },
};

export const productOrder = [
  "lien",
  "toolferry",
  "cleverjobs",
  "clevermart",
] as const;

export const liveProducts = ["lien", "toolferry", "cleverjobs"] as const;

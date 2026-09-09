import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/toolferry", destination: "/products#toolferry", permanent: true },
      { source: "/lien", destination: "/products#lien", permanent: true },
      { source: "/clevermart", destination: "/products#clevermart", permanent: true },
      { source: "/cleverjobs", destination: "/products#cleverjobs", permanent: true },
      { source: "/work", destination: "/services", permanent: true },
    ];
  },
};

export default nextConfig;

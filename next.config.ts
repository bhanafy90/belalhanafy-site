import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static site — no server needed. Deploys to Vercel, and would run
  // unchanged on Cloudflare Pages or any other static host.
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;

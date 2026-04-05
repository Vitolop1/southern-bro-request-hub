import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  async redirects() {
    return [
      {
        source: "/brands/southern-bro-landscaping",
        destination: "/landscaping",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

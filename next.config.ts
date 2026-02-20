import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    // We set the root to the directory where next.config.ts is located (__dirname)
    root: path.join(__dirname),
  },
};
export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};
/** next.config.js */
module.exports = {
    eslint: {
        // Ignore ESLint errors during production builds (use temporarily)
        ignoreDuringBuilds: true,
    },
};
export default nextConfig;

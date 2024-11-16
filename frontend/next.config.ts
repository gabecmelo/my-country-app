import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    PUBLIC_BACKEND_PORT: process.env.PUBLIC_BACKEND_PORT,
  }
};

export default nextConfig;
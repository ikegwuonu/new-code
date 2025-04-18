import type { NextConfig } from "next";
const remoteProtocol = [
  "d3t3ozftmdmh3i.cloudfront.net",
  "d3wo5wojvuv7l.cloudfront.net",
  "api.wokpa.app",
  "d1sfpqaoey1aeo.cloudfront.net",
  "s3.amazonaws.com",
  "wokpa.s3.amazonaws.com",
  "",
];

const nextConfig: NextConfig = {
  /* config options here */
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [{ loader: "@svgr/webpack", options: { icon: true } }],
    });
    return config;
  },
  images: {
    remotePatterns: remoteProtocol.map((item) => ({
      protocol: "https",
      hostname: item,
      port: "",
      pathname: "/**",
    })),
  },

  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;

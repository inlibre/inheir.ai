import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: [
    "pino",
    "pino-pretty",
    "thread-stream",
    "@walletconnect/universal-provider",
    "@walletconnect/ethereum-provider",
  ],
  async redirects() {
    return [
      {
        source: "/api/v1/:path*",
        destination: `${process.env.NODE_ENV === "production" ? process.env.NEXT_PUBLIC_BACKEND_URL : "https://localhost:8000"}/api/v1/:path*`,
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

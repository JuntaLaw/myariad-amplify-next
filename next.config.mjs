/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_USER_POOL_ID: process.env.NEXT_PUBLIC_USER_POOL_ID,
    NEXT_PUBLIC_USER_POOL_CLIENT_ID: process.env.NEXT_PUBLIC_USER_POOL_CLIENT_ID,
    NEXT_PUBLIC_REGION: process.env.NEXT_PUBLIC_REGION,
    // その他の環境変数
  },
  // ここに他のNext.jsの設定を追加できます
};

export default nextConfig;


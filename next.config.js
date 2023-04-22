const debug = process.env.NODE_ENV !== "production";
const repository = "cookapps-dictionary";

const nextConfig = {
  basePath: "/cookapps-dictionary",
  assetPrefix: !debug ? `/${repository}/` : "",
  trailingSlash: true,
  images: {
    unoptimized: true, // 이미지 최적화를 비활성화합니다.
  },
};

module.exports = nextConfig;

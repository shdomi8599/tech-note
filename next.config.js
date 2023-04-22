const debug = process.env.NODE_ENV !== "production";
const repository = "https://shdomi8599.github.io/cookapps-dictionary";

const nextConfig = {
  assetPrefix: !debug ? `/${repository}/` : "",
  trailingSlash: true,
  images: {
    unoptimized: true, // 이미지 최적화를 비활성화합니다.
  },
};

module.exports = nextConfig;

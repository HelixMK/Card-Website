/** @type {{output: string, reactStrictMode: boolean}} */
const nextConfig = {
  output: "export",
  distDir: "dist",
  basePath: '/Card-Website',
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "",
  },
};

module.exports = nextConfig;

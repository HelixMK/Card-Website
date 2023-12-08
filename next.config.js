/** @type {{output: string, reactStrictMode: boolean}} */
const nextConfig = {
  output: "export",
  distDir: "dist",
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "",
  },
};

module.exports = nextConfig;

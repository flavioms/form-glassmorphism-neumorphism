const withImages = require("next-images");
const withPlugins = require("next-compose-plugins");

const nextConfig = {
  target: "serverless",
  webpack(config, { isServer, webpack }) {
    return config;
  },
};

const redirects = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/neumorphism",
        permanent: true,
      },
    ];
  },
};

module.exports = withPlugins([[withImages], [redirects]], nextConfig);

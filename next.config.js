/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    scrollRestoration: true,
  },
  
}
module.exports = {
  staticPageGenerationTimeout: 60, // Default is 60, try increasing to 120 or more
};
module.exports = nextConfig;

// const withFonts = require("next-fonts");
// module.exports = withFonts();

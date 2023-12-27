/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: process.env.RUN_MODE == "dev" ? "" : "/genshin-visions",
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig

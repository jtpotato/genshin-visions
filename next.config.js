/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.RUN_MODE == "dev" ? "" : "/genshin-visions"
}

module.exports = nextConfig

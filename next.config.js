/** @type {import('next').NextConfig} */
const {
  createVanillaExtractPlugin
} = require('@vanilla-extract/next-plugin');
const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig = {
  compiler: {
    removeConsole: process.env.DEBUG === 'false',
  },
  reactStrictMode: true,
};

module.exports = withVanillaExtract(nextConfig);

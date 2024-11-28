/** @type {import('next').NextConfig} */

const env = {
  API_URL: process.env.API_URL
};

const nextConfig =
  process.env.BUILD_PROFILE == 'development' ||
  process.env.BUILD_PROFILE == 'test' ||
  process.env.BUILD_PROFILE == 'production'
    ? { env }
    : {
        env,
        output: 'export',
        images: {
          loader: 'custom',
          loaderFile: './src/components/loader.ts'
        }
      };

module.exports = nextConfig;

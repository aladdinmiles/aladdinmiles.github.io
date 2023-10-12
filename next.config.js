/** @type {import('next').NextConfig} */

const nextConfig =
  process.env.BUILD_PROFILE == 'development' ||
  process.env.BUILD_PROFILE == 'test'
    ? {}
    : {
        output: 'export',
        images: {
          loader: 'custom',
          loaderFile: './src/components/loader.ts'
        }
      };

module.exports = nextConfig;

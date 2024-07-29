/** @type {import('next').NextConfig} */

const nextConfig =
  process.env.BUILD_PROFILE == 'development' ||
  process.env.BUILD_PROFILE == 'test' ||
  process.env.BUILD_PROFILE == 'production'
    ? {}
    : {
        output: 'export',
        images: {
          loader: 'custom',
          loaderFile: './src/components/loader.ts'
        }
      };

module.exports = nextConfig;

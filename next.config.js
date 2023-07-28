/** @type {import('next').NextConfig} */

const nextConfig =
  process.env.NODE_ENV == 'development' || process.env.NODE_ENV == 'test'
    ? {}
    : {
        output: 'export',
        images: {
          loader: 'custom',
          loaderFile: './src/components/loader.ts'
        }
      };

module.exports = nextConfig;

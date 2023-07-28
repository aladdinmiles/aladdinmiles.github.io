/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    loader: 'custom',
    loaderFile: './src/components/loader.ts'
  }
};

module.exports = nextConfig;

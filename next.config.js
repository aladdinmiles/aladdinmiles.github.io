/** @type {import('next').NextConfig} */

const env = {
  API_URL: process.env.API_URL
};

const nextConfig =
  process.env.BUILD_PROFILE == 'development' ||
  process.env.BUILD_PROFILE == 'test' ||
  process.env.BUILD_PROFILE == 'production'
    ? {
        env,
        images: {
          remotePatterns: [
            {
              protocol: 'https',
              hostname: 'flagcdn.com',
              port: '',
              pathname: '/**'
            }
          ]
        }
      }
    : {
        env,
        output: 'export',
        images: {
          loader: 'custom',
          loaderFile: './src/components/loader.ts',
          remotePatterns: [
            {
              protocol: 'https',
              hostname: 'flagcdn.com',
              port: '',
              pathname: '/**'
            }
          ]
        }
      };

module.exports = nextConfig;

/** @type {import('next').NextConfig} */

const env = {
  API_URL: process.env.API_URL
};

const securityHeaders = [
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY'
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin'
  }
];

const nextConfig =
  process.env.BUILD_PROFILE == 'development' ||
  process.env.BUILD_PROFILE == 'test' ||
  process.env.BUILD_PROFILE == 'production'
    ? {
        env,
        async headers() {
          return [
            {
              source: '/:path*',
              headers: securityHeaders
            }
          ];
        },
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

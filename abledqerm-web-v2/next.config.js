'use strict';

const nextConfig = {
  images: {
    domains: ['example.com'], // Add your image domains here
    deviceSizes: [640, 750, 1080, 1920],
    imageSizes: [16, 32, 48, 64, 96],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Custom-Header',
            value: 'my-value',
          },
        ],
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/old-route',
        destination: '/new-route',
      },
    ];
  },
};

module.exports = nextConfig;
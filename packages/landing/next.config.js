const withPlugins = require('next-compose-plugins');

const nextConfig = {
  images: {
    loader: 'imgix',
    path: 'https://fileverse.imgix.net/web/',
    domains: [
      'pbs.twimg.com',
      'fileverse.imgix.net',
    ],
  },
  experimental: {
    images: {
      unoptimised: true
    }
  }
};

module.exports = withPlugins([], nextConfig);

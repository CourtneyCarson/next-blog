/** @type {import('next').NextConfig} */
const nextConfig = {
  // this allows users that signed in with google to use their google profile image
  images: {
    domains: ['lh3.googleusercontent.com'],
  },
};

module.exports = nextConfig;

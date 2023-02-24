/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // async redirects() {
  //   return [
  //     {
  //       source: "/contact/:path*",
  //       destination: "/form/:path*",
  //       permanent: false,
  //     },
  //   ];
  // },
  // async rewrites() {
  //   return [
  //     {
  //       source: "/api/maps",
  //       destination: `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_MAP_KEY}`,
  //     },
  //     {
  //       source: "/api/geocode",
  //       destination: `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_MAP_KEY}&submodules=geocoder`,
  //     },
  //   ];
  // },
};

module.exports = nextConfig;

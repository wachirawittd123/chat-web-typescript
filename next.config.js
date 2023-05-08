/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')(['tailwindcss']);

// const nextConfig = {
//     reactStrictMode: false,
//     swcMinify: true,
//     typescript: {
//         ignoreBuildErrors: true,
//     },
//     experimental: {
//         appDir: true,
//         typedRoutes: true,
//     },
//     webpack5: true,
//     webpack(config) {
//         config.resolve.fallback = { fs: false, module: false };
//         return config;
//     },
// }

// module.exports = nextConfig

module.exports = withTM({
    reactStrictMode: false,
    swcMinify: true,
    typescript: {
        ignoreBuildErrors: true,
    },
    experimental: {
        appDir: true,
        typedRoutes: true,
    },
    webpack5: true,
    webpack(config) {
        config.resolve.fallback = { fs: false, module: false };
        return config;
    },
});

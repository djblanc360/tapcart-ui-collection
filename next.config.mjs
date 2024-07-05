/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    transpilePackages: ["@tapcart/mobile-components"],
    typescript: {
        ignoreBuildErrors: true,
    },
};

export default nextConfig;

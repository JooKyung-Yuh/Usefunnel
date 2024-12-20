/** @type {import('next').NextConfig} */
const nextConfig = {
    // basePath: process.env.NODE_ENV === "production" ? '/Usefunnel' : '',
    // assetPrefix: process.env.NODE_ENV === "production" ? "/Usefunnel/" : "",
    reactStrictMode: true,
    images: {
        domains: [],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        formats: ['image/webp'],
        unoptimized: true
    },
    env: {
        NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
        NEXT_PUBLIC_SITE_NAME: process.env.NEXT_PUBLIC_SITE_NAME,
        NEXT_PUBLIC_SITE_DESCRIPTION: process.env.NEXT_PUBLIC_SITE_DESCRIPTION,
    },
    trailingSlash: true,
}

module.exports = nextConfig
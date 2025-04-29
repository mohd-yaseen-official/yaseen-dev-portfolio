/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "mohamed-yaseen.info",
                pathname: "/media/**",
            },
        ],
    },
};

export default nextConfig;

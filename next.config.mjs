/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "mohamedyaseen.developer.li",
                pathname: "/media/**",
            },
        ],
    },
};

export default nextConfig;

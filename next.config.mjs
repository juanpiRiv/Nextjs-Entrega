/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: "standalone", 
    images: {
        domains: ["cdn.dummyjson.com"], 
    }
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        config.module.rules.push({
            test: /\.(frag|vert)$/,
            type: 'asset/source'
        });
        return config;
    },
    images: {
        domains: [
            'github.com',
            'localhost'
        ]
    }
};

export default nextConfig;
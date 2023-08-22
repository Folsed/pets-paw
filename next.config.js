/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            use: [{ loader: '@svgr/webpack' }],
        })
        return config
    },
    images: {
        domains: [
            'cdn2.thecatapi.com',
        ],
    },
    
}
module.exports = nextConfig

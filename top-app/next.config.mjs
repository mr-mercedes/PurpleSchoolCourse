/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
        const fileLoaderRule = config.module.rules.find((rule) =>
            rule.test?.test?.('.svg'),
        )
        config.module.rules.push(
            {
                ...fileLoaderRule,
                test: /\.svg$/,
                resourceQuery: /url/, // *.svg?url
            },
            {
            test: /\.svg$/,
            issuer: [/\.(js|ts)x?$/],
            use: ['@svgr/webpack'],
        })
        fileLoaderRule.exclude = /\.svg$/
        return config
    }
};

export default nextConfig;

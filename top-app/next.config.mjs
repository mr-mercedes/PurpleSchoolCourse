/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['courses-top.ru'],
        remotePatterns: [
            {
                protocol:'https',
                hostname:'cdn-bucket.hb.bizmrg.com',
                port: '',
                pathname: '/courses-top-images/**'
            }
        ]
    },
    webpack(config, options) {
        const fileLoaderRule = config.module.rules.find((rule) =>
            rule.test?.test?.('.svg'),
        );
        config.module.rules.push({
            ...fileLoaderRule,
            loader: '@svgr/webpack',
            issuer: fileLoaderRule.issuer,
            options: {
                prettier: false,
                svgo: true,
                svgoConfig: {
                    plugins: [{
                        name: 'preset-default',
                        params: {
                            override: {
                                removeViewBox: false
                            }
                        }
                    }],
                },
                titleProp: true,
            },
            test: /\.svg$/,
        });
        return config;
    },
};

export default nextConfig;

const path = require('path')
module.exports = {
    stories: ['../src/components/**/*.stories.[tj]sx'],
    addons: ['@storybook/addon-knobs/register'],
    webpackFinal: async (config, { configType }) => {
        config.module.rules.push(
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
                include: path.resolve(__dirname, '../src'),
            },
            {
                test: /\.(ts|tsx)$/,
                use: [
                    {
                        loader: require.resolve('ts-loader'),
                    },
                    // Optional
                    {
                        loader: require.resolve('react-docgen-typescript-loader'),
                    },
                ],
            },
        )
        config.resolve.extensions.push('.ts', '.tsx')
        return config
    },
}

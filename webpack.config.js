const path = require('path');
const { CheckerPlugin } = require('awesome-typescript-loader')

module.exports = {
    entry: './src/app.ts',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            }
        ]
    },
    devServer: {
        port: 3000,
    },
    plugins: [
        new CheckerPlugin()
    ]
};
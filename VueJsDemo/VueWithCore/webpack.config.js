var path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');


module.exports = (env) => {
    const isDevBuild = !(env && env.prod);
    return [{
        stats: { modules: false },
        mode: isDevBuild ? 'development' : 'production',
        entry: { 'main-client': './ClientApp/app.js' },
        output: {
            path: path.resolve(__dirname, './wwwroot/dist'),
            publicPath: '/dist/',
            filename: 'main-client.js'
        },
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: [
                        'vue-style-loader',
                        'css-loader'
                    ]
                },
                {
                    test: /\.vue$/,
                    loader: 'vue-loader'
                },
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/
                }
            ]
        },
        plugins: [
            new VueLoaderPlugin()
        ]
    }];
};

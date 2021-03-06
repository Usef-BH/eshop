let path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/app/index.jsx',
    output: {
        path: path.join(__dirname, 'static/dist'),
        filename: 'bundle.js',
        publicPath: 'dist/'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: path.join(__dirname, 'node_modules'),
                use: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: [
                        'style-loader', 
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                                localIdentName: '[local]__[name]__[hash:base64:5]',
                            }
                        }                    
                ]
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                use: 'file-loader',
            }
        ]
    }
}
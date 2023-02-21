const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.jsx',
    output : {
        path: path.resolve(__dirname, 'docs'),
        filename: 'bundle.js'
    },

    resolve:{
        extensions : ['.js','.jsx'],
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'public/index.html'
        })
    ],

    

    module: {
        rules: [
            {
                test:/\.(js|jsx)$/,
                exclude:/node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env' , '@babel/preset-react']
                    }
                }
            }
        ]
    },
    devServer: {
        static: './dist',
        port: 3000
    }
}
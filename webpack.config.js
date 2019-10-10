const path = require('path');

    module.exports = {

    mode: 'development',
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {  
        rules: [{
            //Rules for JS files
            loader: 'babel-loader',
            test:  /\.js$/,
            exclude: /node_modules/
        },
        {   
            //Rules for scss and css files         
            test: /\.s?css$/,
            //Utilizing "use" to provide an array of loaders
            use: [ 
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        },
        {
            //Utilize file loader for Webpack image compilation
            test: /\.(gif|svg|jpe?g|png)$/, 
            use: [
                'file-loader'
            ]
        }]  
    },
    devtool: 'cheap-module-eval-source-map' //Utilizing a Webpack dev source map for debugging purposes
};
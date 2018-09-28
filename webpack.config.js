const path = require('path');

module.exports = {
   entry: './src/app.js',
   output: {
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js'
   },
   module: {
      rules: [
         {
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
         },
         {
            test: /\.s?css$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
         }
      ]
   },
   // resolve: {
   //    // options for resolving module requests
   //    // (does not apply to resolving to loaders)
   //    modules: ['node_modules', path.resolve(__dirname, 'app')],
   //    // directories where to look for modules
   //    extensions: ['.js', '.json', '.jsx', '.css']
   // },

   devtool: 'cheap-module-eval-source-map',
   devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true,
      hot: true,
      index: 'index.html',
      open: true,
      overlay: true
   }
};

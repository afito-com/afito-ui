const path = require('path');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        // I haven't used SCSS in the base example, but it's here for you if you
        // want! If you want to use CSS, you can change this next like's regex to
        // /\.(css|scss)$/ or even just /\.css$/
        test: /\.scss$/,
        use: [
          // These three libraries are commonly used together to turn Sass into
          // CSS, then be able to load the CSS directly with imports. From there
          // It gets put in the DOM for you.
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' },
        ],
      },
      {
        test: /\.(png|gif|jpg|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 50000,
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.scss', '.js', '.json', '.png', '.gif', '.jpg', '.svg'],
  },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    publicPath: '',
    filename: 'afitoui.js',
    libraryTarget: 'commonjs2',
  },
};

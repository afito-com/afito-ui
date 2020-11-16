const path = require('path');

module.exports = {
  entry: './src/index.js',
  externals: {
    'styled-components': {
      commonjs: 'styled-components',
      commonjs2: 'styled-components',
      amd: 'styled-components'
    },
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react'
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'react-dom'
    },
    yup: {
      commonjs: 'yup',
      commonjs2: 'yup',
      amd: 'yup'
    },
    formik: {
      commonjs: 'formik',
      commonjs2: 'formik',
      amd: 'formik'
    }
  },
  resolve: {
    alias: {
      'styled-components': require.resolve('styled-components')
    },
    extensions: ['.scss', '.js', '.json', '.png', '.gif', '.jpg', '.svg']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.scss$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'sass-loader' }]
      },
      {
        test: /\.(png|gif|jpg|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: 'afito-ui.js',
    libraryTarget: 'commonjs2'
  },
  devtool: false,
  optimization: {
    minimize: false
    // usedExports: true
  }
  // stats: {
  //   usedExports: true
  // }
};

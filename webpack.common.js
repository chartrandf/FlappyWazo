const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    main: "./src/index.js",
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        type: "asset/resource",
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "fonts",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/manifest-app.json', to: 'manifest-app.json' },
        { from: 'src/manifest-portal.json', to: 'manifest-portal.json' },
        { from: 'src/assets/wazo-bird-color.svg', to: 'imgs/wazo-bird-color.svg' },
        { from: 'src/assets/wazo-bird-white.svg', to: 'imgs/wazo-bird-white.svg' },
      ],
    }),
  ],
};

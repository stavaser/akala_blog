export const module = {
  rules: [
    {
      test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'file-loader',
      options: {
        name: '/fonts/[name].[hash].[ext]',
      },
    },
  ],
};

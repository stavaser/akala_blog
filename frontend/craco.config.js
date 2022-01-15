const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#57745A',
              '@border-radius-base': '10px',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};

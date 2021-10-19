const path = require('path');
const withImages = require('next-images');

module.exports = {
    ...withImages(),
    future: {
        webpack5: true,
    },
    webpack: (config, options) => {
        config.module.rules.push(
          {
            test: /\.(jpe?g|png|webp|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
            loader: 'url-loader?limit=100000' 
          }
        )
        return config
      },
    env: {
        TEMPLATE_ID: 'template_6h97ddv',
        USER_ID: 'user_52DVySDrVoAFY5uEbQliT'
    },
    images: {
        domains: ['res.cloudinary.com'],
      },
};
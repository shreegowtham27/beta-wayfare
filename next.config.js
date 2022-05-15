const path = require('path')
// const withSass = require('@zeit/next-sass');
module.exports = ({
  /* bydefault config  option Read For More Optioshere https://github.com/vercel/next-plugins/tree/master/packages/next-sass*/
  cssModules: true
})
  module.exports = {
    /* Add Your Scss File Folder Path Here */
    sassOptions: {includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['source.unsplash.com'],
  },
}
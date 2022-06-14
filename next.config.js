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
    domains: ['source.unsplash.com','images.unsplash.com'],
  },
  env: {
    "MAILGUN_API_KEY":process.env.MAILGUN_API_KEY,
    "MAILGUN_DOMAIN":process.env.MAILGUN_DOMAIN,
    "TO_EMAIL_ADDRESS" : process.env.TO_EMAIL_ADDRESS
  },
}
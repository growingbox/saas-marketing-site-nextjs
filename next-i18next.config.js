module.exports = {
  i18n: {
    locales: ['en-US', 'zh-CN', 'jp'],
    defaultLocale: 'zh-CN',
  },
   /** To avoid issues when deploying to some paas (vercel...) */
   localePath:
   typeof window === 'undefined'
     ? require('path').resolve('./public/locales')
     : '/locales',
  defaultNS: "common",
  react: { useSuspense: false }, //TEMP
  reloadOnPrerender: process.env.NODE_ENV !== "production", // DEVELOPMENT-ONLY, IMPORTANT!
};
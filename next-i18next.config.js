module.exports = {
  i18n: {
    locales: ['en-US', 'zh-CN', 'jp'],
    defaultLocale: 'zh-CN',
  },
  defaultNS: "common",
  react: { useSuspense: false }, //TEMP
  reloadOnPrerender: process.env.NODE_ENV !== "production", // DEVELOPMENT-ONLY, IMPORTANT!
};
module.exports = () => ({
  // Enable i18n plugin for localization/translation
  i18n: {
    enabled: true,
    config: {
      // Available locales
      locales: ['en', 'id'],
      // Default locale
      defaultLocale: 'id',
      // Choose locale strategy
      // Values: 'path' | 'cookie' | 'header'
      // Default is 'path'
      cookieName: 'locale',
    },
  },
});

/**
 * Localization middleware
 * Automatically populate locale from query params or headers
 */

module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    // Get locale from query param, header, or use default
    const locale = 
      ctx.query.locale || 
      ctx.query._locale ||
      ctx.request.header['accept-language']?.split(',')[0]?.split('-')[0] ||
      'id'; // default locale

    // Add locale to context for later use
    ctx.state.locale = locale;

    // If it's a GET request, automatically add locale to query
    if (ctx.method === 'GET' && !ctx.query.locale) {
      ctx.query.locale = locale;
    }

    await next();
  };
};

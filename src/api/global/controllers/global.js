'use strict';

/**
 *  global controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::global.global', ({ strapi }) => ({
  async find(ctx) {
    // Automatically populate with localization
    ctx.query = {
      ...ctx.query,
      populate: {
        favicon: true,
        defaultSeo: {
          populate: ['shareImage'],
        },
        localizations: {
          fields: ['locale', 'siteName', 'siteDescription'],
        },
      },
    };

    const { data, meta } = await super.find(ctx);
    return { data, meta };
  },
}));

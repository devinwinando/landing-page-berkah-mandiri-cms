'use strict';

/**
 * product controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::product.product', ({ strapi }) => ({
  async find(ctx) {
    // Automatically populate with localization
    ctx.query = {
      ...ctx.query,
      populate: {
        image: true,
        localizations: {
          fields: ['locale', 'name', 'slug', 'shortDescription'],
        },
      },
      sort: ['order:asc', 'createdAt:desc'],
    };

    const { data, meta } = await super.find(ctx);
    return { data, meta };
  },

  async findOne(ctx) {
    // Automatically populate with localization
    ctx.query = {
      ...ctx.query,
      populate: {
        image: true,
        localizations: {
          fields: ['locale', 'name', 'slug', 'description', 'specifications'],
        },
      },
    };

    const { data, meta } = await super.findOne(ctx);
    return { data, meta };
  },
}));

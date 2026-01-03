'use strict';

/**
 * service controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::service.service', ({ strapi }) => ({
  async find(ctx) {
    // Auto-populate relations
    ctx.query = {
      ...ctx.query,
      populate: {
        image: true,
        icon: true,
        localizations: true,
      },
      sort: ['order:asc'],
    };

    const { data, meta } = await super.find(ctx);
    return { data, meta };
  },

  async findOne(ctx) {
    // Auto-populate relations
    ctx.query = {
      ...ctx.query,
      populate: {
        image: true,
        icon: true,
        localizations: true,
      },
    };

    const { data, meta } = await super.findOne(ctx);
    return { data, meta };
  },
}));

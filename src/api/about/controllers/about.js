'use strict';

/**
 *  about controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::about.about', ({ strapi }) => ({
  async find(ctx) {
    // Auto-populate relations
    ctx.query = {
      ...ctx.query,
      populate: {
        image: true,
        localizations: true,
      },
    };
    
    const { data, meta } = await super.find(ctx);
    
    return { data, meta };
  },
}));

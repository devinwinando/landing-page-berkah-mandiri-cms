'use strict';

/**
 *  article controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::article.article', ({ strapi }) => ({
  async find(ctx) {
    // Automatically populate relations with localization
    ctx.query = {
      ...ctx.query,
      populate: {
        cover: true,
        blocks: true,
        createdBy: {
          fields: ['id', 'username', 'firstname', 'lastname'],
        },
        updatedBy: {
          fields: ['id', 'username', 'firstname', 'lastname'],
        },
        localizations: {
          fields: ['locale', 'title', 'slug'],
        },
      },
    };

    const { data, meta } = await super.find(ctx);
    return { data, meta };
  },

  async findOne(ctx) {
    // Automatically populate relations with localization
    ctx.query = {
      ...ctx.query,
      populate: {
        cover: true,
        blocks: true,
        createdBy: {
          fields: ['id', 'username', 'firstname', 'lastname'],
        },
        updatedBy: {
          fields: ['id', 'username', 'firstname', 'lastname'],
        },
        localizations: {
          fields: ['locale', 'title', 'slug'],
        },
      },
    };

    const { data, meta } = await super.findOne(ctx);
    return { data, meta };
  },
}));

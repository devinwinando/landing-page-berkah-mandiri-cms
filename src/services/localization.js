/**
 * Localization Helper Service
 * Utility functions for handling i18n in Strapi
 */

module.exports = {
  /**
   * Get content by locale with fallback
   * @param {string} uid - Content type UID (e.g., 'api::article.article')
   * @param {number} id - Entry ID
   * @param {string} locale - Desired locale (default: 'id')
   * @param {object} strapi - Strapi instance
   * @returns {Promise<object>} - Localized content or fallback
   */
  async findOneWithFallback(uid, id, locale = 'id', strapi) {
    try {
      // Try to get content in desired locale
      const entry = await strapi.entityService.findOne(uid, id, {
        locale,
        populate: '*',
      });

      if (entry) {
        return entry;
      }

      // Fallback to default locale if not found
      const fallback = await strapi.entityService.findOne(uid, id, {
        locale: 'id',
        populate: '*',
      });

      return fallback;
    } catch (error) {
      strapi.log.error('Error in findOneWithFallback:', error);
      throw error;
    }
  },

  /**
   * Get all localizations for an entry
   * @param {string} uid - Content type UID
   * @param {number} id - Entry ID
   * @param {object} strapi - Strapi instance
   * @returns {Promise<Array>} - Array of localized entries
   */
  async getAllLocalizations(uid, id, strapi) {
    try {
      const entry = await strapi.entityService.findOne(uid, id, {
        populate: ['localizations'],
      });

      if (!entry) {
        return [];
      }

      // Get all localization IDs including the entry itself
      const localizationIds = [
        id,
        ...(entry.localizations?.map((l) => l.id) || []),
      ];

      // Fetch all localizations
      const localizations = await Promise.all(
        localizationIds.map((locId) =>
          strapi.entityService.findOne(uid, locId, {
            populate: '*',
          })
        )
      );

      return localizations.filter(Boolean);
    } catch (error) {
      strapi.log.error('Error in getAllLocalizations:', error);
      throw error;
    }
  },

  /**
   * Create localization for existing entry
   * @param {string} uid - Content type UID
   * @param {number} id - Source entry ID
   * @param {string} locale - Target locale
   * @param {object} data - Translated data
   * @param {object} strapi - Strapi instance
   * @returns {Promise<object>} - Created localization
   */
  async createLocalization(uid, id, locale, data, strapi) {
    try {
      const sourceEntry = await strapi.entityService.findOne(uid, id);

      if (!sourceEntry) {
        throw new Error(`Entry with id ${id} not found`);
      }

      // Create new entry with localization
      const newEntry = await strapi.entityService.create(uid, {
        data: {
          ...data,
          locale,
          localizations: [id],
        },
      });

      // Update source entry to include new localization
      await strapi.entityService.update(uid, id, {
        data: {
          localizations: [...(sourceEntry.localizations || []), newEntry.id],
        },
      });

      return newEntry;
    } catch (error) {
      strapi.log.error('Error in createLocalization:', error);
      throw error;
    }
  },

  /**
   * Get available locales
   * @param {object} strapi - Strapi instance
   * @returns {Promise<Array>} - Array of available locales
   */
  async getAvailableLocales(strapi) {
    try {
      const locales = await strapi
        .plugin('i18n')
        .service('locales')
        .find();
      
      return locales.map((locale) => ({
        code: locale.code,
        name: locale.name,
        isDefault: locale.isDefault,
      }));
    } catch (error) {
      strapi.log.error('Error in getAvailableLocales:', error);
      return [];
    }
  },

  /**
   * Check if locale is valid
   * @param {string} locale - Locale code
   * @param {object} strapi - Strapi instance
   * @returns {Promise<boolean>}
   */
  async isValidLocale(locale, strapi) {
    const locales = await this.getAvailableLocales(strapi);
    return locales.some((l) => l.code === locale);
  },

  /**
   * Get default locale
   * @param {object} strapi - Strapi instance
   * @returns {Promise<string>} - Default locale code
   */
  async getDefaultLocale(strapi) {
    const locales = await this.getAvailableLocales(strapi);
    const defaultLocale = locales.find((l) => l.isDefault);
    return defaultLocale?.code || 'id';
  },
};

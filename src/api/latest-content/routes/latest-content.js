'use strict';

/**
 * latest-content router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::latest-content.latest-content');

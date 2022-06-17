'use strict';

/**
 * launch-time router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::launch-time.launch-time');

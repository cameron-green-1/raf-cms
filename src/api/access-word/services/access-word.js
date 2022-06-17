'use strict';

/**
 * access-word service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::access-word.access-word');

'use strict';

/**
 * latest-content service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::latest-content.latest-content');

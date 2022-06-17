'use strict';

/**
 * launch-time service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::launch-time.launch-time');

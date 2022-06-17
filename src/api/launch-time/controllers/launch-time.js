'use strict';

/**
 *  launch-time controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::launch-time.launch-time');

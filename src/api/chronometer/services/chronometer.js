'use strict';

/**
 * chronometer service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::chronometer.chronometer');

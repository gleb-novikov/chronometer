'use strict';

/**
 * pagemeter service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::pagemeter.pagemeter');

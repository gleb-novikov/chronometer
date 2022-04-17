'use strict';

/**
 * parameter-en service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::parameter-en.parameter-en');

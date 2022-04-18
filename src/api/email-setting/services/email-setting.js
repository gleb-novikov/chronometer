'use strict';

/**
 * email-setting service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::email-setting.email-setting');

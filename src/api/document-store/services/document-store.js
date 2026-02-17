'use strict';

/**
 * document-store service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::document-store.document-store');

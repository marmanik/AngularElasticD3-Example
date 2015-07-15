'use strict';

/**
 * @ngdoc service
 * @name elasticWebAppApp.elasticService
 * @description
 * # elasticService
 * Service in the elasticWebAppApp.
 */
angular.module('elasticWebAppApp')
  .service('elasticService', function (esFactory) {
    return esFactory({ host: 'localhost:9200' });
  });

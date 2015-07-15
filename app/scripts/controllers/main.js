'use strict';

/**
 * @ngdoc function
 * @name elasticWebAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the elasticWebAppApp
 */
angular.module('elasticWebAppApp')
  .controller('MainCtrl', function ($scope, $log, elasticService) {

    var colorArray = ['#000000', '#660000', '#CC0000', '#FF6666', '#FF3333', '#FF6666', '#FFE6E6'];

    $scope.colorFunction = function () {
      return function (d, i) {
        return colorArray[i];
      };
    };

    $scope.xFunction = function () {
      return function (d) {
        return d.key;
      };
    };
    $scope.yFunction = function () {
      return function (d) {
        return d.doc_count;
      };
    };

    $scope.descriptionFunction = function () {
      return function (d) {
        return d.key;
      };
    };

    $scope.toolTipContentFunction = function () {
      return function (key, x, y) {
        return 'Super New Tooltip' +
          '<h1>' + key + '</h1>' +
          '<p>' + y + ' at ' + x + '</p>';
      };
    };

    // search for documents
    elasticService.search({
      index: 'nfl',
      size: 5,
      body: {
        // Begin query.
        query: {
          // Boolean query for matching and excluding items.
          bool: {
            must: {match: {"description": "TOUCHDOWN"}},
            must_not: {match: {"qtr": 5}}
          }
        },
        // Aggregate on the results
        aggs: {
          touchdowns: {
            terms: {
              field: "qtr",
              order: {"_term": "asc"}
            }
          }
        }
        // End query.
      }
    }).then(function (response) {

      $scope.dataObj =  response.aggregations.touchdowns.buckets;

    });


  });

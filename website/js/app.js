'use strict';
// angular.js main app initialization
var app = angular.module('newswebsite', ['ngRoute']);
    app.controller(
      'WebCtl', 
      [
         '$scope', 
         '$log', 
         function ($scope, $log) {
                $scope.handleMyButton = function() {
                  $log.log('Angular link clicked!');
                }
         }
      ]
      );

    app.config(specifyRoutes);
    function specifyRoutes($routeProvider) {
      $routeProvider
         .when('http://vault.hanover.edu/~vanh17/website/#/', {templateUrl: 'home_index.html'})
         .when('http://vault.hanover.edu/~vanh17/website/#/article/:articleId', {templateUrl: function(params) { return params.articleId + '.html';}});
    }
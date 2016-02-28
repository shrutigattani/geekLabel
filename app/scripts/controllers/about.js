'use strict';

/**
 * @ngdoc function
 * @name geekLabelApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the geekLabelApp
 */
angular.module('geekLabelApp')
  .controller('AboutCtrl', function ($scope, $location, $anchorScroll, $routeParams) {
  	console.log("AboutCtrl");
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

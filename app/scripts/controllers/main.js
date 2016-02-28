'use strict';

/**
 * @ngdoc function
 * @name geekLabelApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the geekLabelApp
 */
angular.module('geekLabelApp')
  .controller('MainCtrl', function ($scope, $location, $anchorScroll, $routeParams){
 
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

     $scope.linkTo = function(id) {
     $location.url(id);
   };
   
   function initMap() {
    var mapDiv = document.getElementById('map');
    var map = new google.maps.Map(mapDiv, {
      center: {lat: 44.540, lng: -78.546},
      zoom: 8
    });
  }
    
  });

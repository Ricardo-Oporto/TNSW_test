'use strict';

/**
 * @ngdoc function
 * @name frontEndTestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the frontEndTestApp
 */
angular.module('frontEndTestApp')
    .controller('MainCtrl', function ($uibModal, dataService, $scope) {

        var vm = this;

        dataService.getBusRouteData('data/bus-services-data.json').then(function (data) {

            $scope.busRoutes = data;

        });



    });

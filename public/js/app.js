var materialize = angular.module('materialize', ['ngRoute']);

materialize.config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');

    $routeProvider
        .when('/', {
            templateUrl: 'views/information.html'
        })
        .when('/agenda', {
            templateUrl: 'views/agenda.html'
        });
});
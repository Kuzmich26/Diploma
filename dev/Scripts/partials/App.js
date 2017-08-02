var myApp = angular.module('AmicoMultipage', ['ngRoute']);


myApp.config(function($routeProvider) {
  $routeProvider

    .when('/home', {
    templateUrl: 'home.html',
    controller: 'HomeCtrl'
  })


  .when('/about', {
    templateUrl: 'about.html',
    controller: 'AboutCtrl'
  })


  .when('/services', {
    templateUrl: 'services.html',
    controller: 'servicesCtrl'
  })

  .when('/media', {
    templateUrl: 'media.html',
    controller: 'mediaCtrl'
  })
  .when('/news', {
    templateUrl: 'news.html',
    controller: 'newsCtrl'
  })


  .when('/contact', {
    templateUrl: 'contact.html',
    controller: 'ContactCtrl'
  })

  .otherwise({
      templateUrl: 'home.html',
      controller: 'HomeCtrl'
    });
});

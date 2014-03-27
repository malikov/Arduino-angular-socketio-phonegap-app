'use strict';
/*
  Ardbot app
  v 0.0.1

  Author : Vincent Maliko

*/
angular.module('ArdBot', 
        ['ionic',
         'ArdBot.controllers',
         'ArdBot.services',
         'ArdBot.factories'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/menu.html",
      controller: 'AppCtrl'
    })

    .state('app.setup', {
      url: "/setup",
      views: {
        'menuContent' :{
          templateUrl: "templates/setup.html",
          controller: 'SetupCtrl'
        }
      }
    })

    .state('app.control', {
      url: "/control",
      views: {
        'menuContent' :{
          templateUrl: "templates/control.html",
          controller: 'ControlCtrl'
        }
      }
    })
    .state('app.log', {
      url: "/log",
      views: {
        'menuContent' :{
          templateUrl: "templates/log.html",
          controller: 'LogCtrl'
        }
      }
    })

    
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/setup');
});


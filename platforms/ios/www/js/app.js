// Ionic Starter App, v0.9.20

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'ardbot.controllers'])

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


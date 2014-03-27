var app = angular.module('ArdBot.controllers', []);

app.controller('AppCtrl', function($scope) {
	/*
		Controller for the entire app but mostly for the left menu
	*/
  console.log('line 7 controller.js --> AppCtrl');
})

app.controller('SetupCtrl',['$scope','Constants',
 function($scope,Constants) {
  console.log('line 12 controller.js --> SetupCtrl');
})

app.controller('ControlCtrl',['$scope',
 function($scope) {
  console.log('line 17 controller.js --> ControlCtrl');
})

app.controller('LogCtrl',['$scope',
 function($scope) {
  console.log('line 22 controller.js --> LogCtrl');
})

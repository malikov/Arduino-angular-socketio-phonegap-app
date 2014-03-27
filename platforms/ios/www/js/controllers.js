var app = angular.module('ArdBot.controllers', []);

app.controller('AppCtrl', function($scope) {
	/*
		Controller for the entire app but mostly for the left menu
	*/
  console.log('line 7 controller.js --> AppCtrl');

  // init socket.io
})

app.controller('SetupCtrl',['$scope','Constants',
 function($scope,Constants) {
  //
  console.log('line 12 controller.js --> SetupCtrl');

  $scope.serverIp = Constants.serverIp;
  $scope.serverPort = Constants.serverPort;

  $scope.connect = function(){
  	alert('Connecting to server');
  	// use socket over here to connect
  }

}])

app.controller('ControlCtrl',['$scope',
 function($scope) {
  console.log('line 17 controller.js --> ControlCtrl');

  $scope.distance = 0;
  $scope.serverIn = "";

  $scope.performMove = function(id){
  	// send move 

  	// send distance a few seconds after, check if distance is a float
  }

  $scope.getData = function(){
  	// send socket for get data

  	//catch socket answer here and update $scope.serverIn;
  }

}])

app.controller('LogCtrl',['$scope',
 function($scope) {
  console.log('line 22 controller.js --> LogCtrl');
}])

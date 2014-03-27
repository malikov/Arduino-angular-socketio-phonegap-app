var app = angular.module('ArdBot.services', []);

app.service('Constants',[
 function() {
  
  return {
    serverIp : "112.168.1.0",
    serverPort : 3000
  }

}]);

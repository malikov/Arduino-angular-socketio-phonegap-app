var app = angular.module('ArdBot.services', []);

app.service('Constants',[
 function() {
  
  return {
    serverIp : "112.168.1.0",
    serverPort : 3000
  }

}]);

app.service('SocketIo',[
	function(){

	var socket = {
		_init : function(serverIp,serverPort){
			this = io.connect();
		}
	}

	return socket;
}]);

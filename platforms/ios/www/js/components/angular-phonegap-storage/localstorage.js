'use strict';
/*
  angular component for using PhoneGap's localstorage

  Dependencies : 
    angular-phonegap-ready by Brian Ford
*/
angular.module('malikov.phonegap.storage').
  service('localstorage', ['$ionicPlatform',
    function ($ionicPlatform) {
    
    var localstorage = {
      getKey : $ionicPlatform.ready(function (index) {

        index = typeof index !== 'undefined'? index : 0;
        return window.localStorage.key(index);      
      }),
      setItem : $ionicPlatform.ready(function (key,value) {
        key = typeof key !== 'undefined'? key : false;
        value = typeof value !== 'undefined'? value : false;
        
        if(!key || !value)
          return false;

          window.localStorage.setItem(key,value);
          
        return true;
      }),
      getItem : $ionicPlatform.ready(function(key){
        key = typeof key !== 'undefined'? key : false;

        if(!key)
          return 'undefined';

        return window.localStorage.getItem(key);
      }),
      removeItem : $ionicPlatform.ready(function(key){
        key = typeof key !== 'undefined'? key : false;

        if(!key)
          return false;
        
        window.localStorage.removeItem(key);

        return true;
      }),
      clear : $ionicPlatform.ready(function(){
        window.localStorage.clear();
      })

    };

    return localstorage; 

  });
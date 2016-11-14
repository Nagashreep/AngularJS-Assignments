(function(){
  "use strict";

  angular.module('public')
  .service('SignupService',SignupService);

  SignupService.$inject = ['$http','ApiPath']
  function SignupService ($http,ApiPath) {
    var signService = this;
    signService.user = {};

    signService.validateUserOption = function(category){
      return $http.get(ApiPath+"/menu_items/"+category.toUpperCase()+".json");
    }

    signService.saveUserInfo = function(user){
      signService.user = user;
    }

    signService.getUser = function(){
      return signService.user;
    }
  }
})();

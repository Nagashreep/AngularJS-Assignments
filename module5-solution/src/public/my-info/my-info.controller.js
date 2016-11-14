(function(){
  "use strict";

  angular.module('public')
  .controller('MyInfoController',MyInfoController);

  MyInfoController.$inject = ['user','ApiPath'];
  function MyInfoController(user,ApiPath){
    var myInfoCtrl = this;
    myInfoCtrl.user = user;
    myInfoCtrl.showSignupMsg = false;
    if(angular.equals({},user)){
      myInfoCtrl.showSignupMsg = true;
    }
    myInfoCtrl.basePath =ApiPath;
  }
})();

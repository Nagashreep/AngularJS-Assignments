(function(){

  "use strict";

  angular.module('public')
  .controller('SignupController',SignupController);

  SignupController.$inject = ['SignupService']
  function SignupController(SignupService){
    var signupCtrl = this;
    signupCtrl.successMsg = "";
    signupCtrl.favMenuError = "";
    
    signupCtrl.validate = function(){
      if(signupCtrl.user.favMenuNumber!="" && signupCtrl.user.favMenuNumber!=undefined){
        SignupService.validateUserOption(signupCtrl.user.favMenuNumber)
        .then(function(response){
          signupCtrl.successMsg = "Your information has been saved.";
          signupCtrl.favMenuError = "";
          signupCtrl.user.favMenu = response.data;

          //save user information
          SignupService.saveUserInfo(signupCtrl.user);
        })
        .catch(function(error){
          signupCtrl.favMenuError = "No such menu number exists";
          signupCtrl.successMsg = "";
        });
      }else{
        //save user information
        SignupService.saveUserInfo(signupCtrl.user);

        signupCtrl.successMsg = "Your information has been saved.";
        signupCtrl.favMenuError = "";
      }
    }
  }

})();

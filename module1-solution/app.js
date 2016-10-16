(function () {
  'use strict';

  angular.module('LunchCheck',[])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject=['$scope'];

  function LunchCheckController($scope){
    $scope.foodItems='';
    $scope.customStyle={};
    $scope.countAndDisplayMsg = function(){
      var count = getNumberOfItems($scope.foodItems);
      displayMsg(count);
    };

    function getNumberOfItems(foodItems){
      var foodItemsArray = foodItems.split(',');
      var count = 0;
      for (var i = 0; i < foodItemsArray.length; i++) {
        if(foodItemsArray[i].trim()!=''){
          count++;
        }
      }
      return count;
    }

    function displayMsg(count){
      if(count==0){
        $scope.message="Please enter data first!";
      }else if(count<=3){
         $scope.message="Enjoy!";
      }else if(count>3){
         $scope.message="Too much!";
      }
      return;
    }
  }
})();

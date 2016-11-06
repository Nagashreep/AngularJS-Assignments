(function(){

  'use strict';

  angular.module('MenuApp')
  .service('MenuDataService',MenuDataService)
  .constant('UrlBasePath', 'https://davids-restaurant.herokuapp.com');

  MenuDataService.$inject = ['UrlBasePath', '$http']
  function MenuDataService(UrlBasePath, $http){
    var dataService = this;

    dataService.getAllCategories = function(){
      console.log("inside service");
       return $http ({
        method: 'GET',
        url:(UrlBasePath+"/categories.json")
      }).then(function(response){
        return response.data;
      }).catch(function(error){
        console.log("Error while service call1");
      });
    };

    dataService.getItemsForCategory = function($stateParams){
      console.log($stateParams);
      var shortCategoryName = $stateParams.shortCategoryName;
      console.log("shortCategoryName inside service: ",shortCategoryName);
       return $http({
         method: 'GET',
         url:(UrlBasePath+'//menu_items.json'),
         params:{
           category : shortCategoryName
         }
      }).then(function(response){
        console.log("inside getItemsForCategory: ",response.data);
        return response.data;
      }).catch(function(error){
        console.log("error while calling service2");
      })
    };
  }
})();

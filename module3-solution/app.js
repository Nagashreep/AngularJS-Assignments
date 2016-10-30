(function(){
  'use strict';

  angular.module('NarrowItDownApp',[])
  .controller('NarrowItDownController',NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .filter('menuSearch',MenuSearchFilter)
  .directive('foundItems',FoundItemsDirective)
  .constant('UrlBasePath',"https://davids-restaurant.herokuapp.com");

  NarrowItDownController.$inject = ['MenuSearchService']
  function NarrowItDownController(MenuSearchService){
    var narrowDownCtrl = this;
    narrowDownCtrl.title = "Search Result"
    narrowDownCtrl.getMatchedMenuItems = function(){
      var promise = MenuSearchService.getMatchedMenuItems(narrowDownCtrl.searchTerm);

      promise.then(function(response){
        narrowDownCtrl.filteredMenuList = response.data.menu_items;
      }).catch(function(error){
        console.log("error!!");
      })
    };
    narrowDownCtrl.removeItem = function(index){
      MenuSearchService.removeItem(narrowDownCtrl.filteredMenuList,index);
    };
  }

  MenuSearchService.$inject = ['$http','UrlBasePath','menuSearchFilter']
  function MenuSearchService($http, UrlBasePath,menuSearchFilter){
    var menuService = this;
    menuService.getMatchedMenuItems = function(searchTerm){
      return $http ({
        method: 'GET',
        url:(UrlBasePath+"/menu_items.json")
      }).then(function(response){
        return menuSearchFilter(response,searchTerm);
      }).catch(function(error){
        console.log("error while fetching data");
      })
    };

    menuService.removeItem = function(filteredMenuList,index){
      filteredMenuList.splice(index,1);
    };
  }

  function MenuSearchFilter(){
    return function (response, searchTerm) {
      var filteredMenu = [];
      if(searchTerm!=undefined && searchTerm.trim()!=""){
        for (var i = 0; i < response.data.menu_items.length; i++) {
          if(response.data.menu_items[i].description.toUpperCase().indexOf(searchTerm.toUpperCase())!==-1){
            filteredMenu.push(response.data.menu_items[i]);
          }
        }
      }
      response.data.menu_items = filteredMenu;
      return response;
    };
  }

  function FoundItemsDirective(){
    var ddo = {
      templateUrl:'directiveTemplate.html',
      scope: {
        filteredMenuList: '<',
        title: '@title',
        removeItem: '&'
      }
    };
    return ddo;
  }

})();

(function(){

  'use strict';

  angular.module('MenuApp')
  .controller('MenuListController',MenuListController);

  MenuListController.$inject = ['MenuDataService', 'menuList'];
  function MenuListController(MenuDataService,menuList){
    var listController = this;
    listController.menuList = menuList;
  }

})();

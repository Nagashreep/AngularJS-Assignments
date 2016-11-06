(function(){
  'use strict';

  angular.module('MenuApp')
  .config(RourterConfig);

  RourterConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RourterConfig($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise("/");

    $stateProvider
    .state('home',{
      url: '/',
      templateUrl: 'src/menu/template/home.template.html'
    })

    .state('menuList',{
      url: '/menu-list',
      templateUrl: 'src/menu/template/main-menulist.template.html',
      controller: 'MenuListController as listController',
      resolve: {
        menuList: ['MenuDataService',function (MenuDataService){
          return  MenuDataService.getAllCategories();
        }]
      }
    })

    .state('menuDetail',{
      url: '/menu-detail/{shortCategoryName}',
      templateUrl: 'src/menu/template/main-menudetail.template.html',
      controller: 'MenuDetailController as detailController',
      resolve: {
        itemMap: ['MenuDataService', '$stateParams',function (MenuDataService, $stateParams){
          return MenuDataService.getItemsForCategory($stateParams);
        }]
      }
    })

  }
})();

(function(){

  angular.module('Data')
  .controller('MenuDetailController',MenuDetailController);

  MenuDetailController.$inject = ['itemMap','MenuDataService']
  function MenuDetailController(itemMap,MenuDataService){
    var detailController = this;
    console.log("menuList: ",itemMap);
    detailController.itemList = itemMap.menu_items;
    detailController.name = itemMap.category.name;
    detailController.shortName = itemMap.category.short_name;
  }

})();

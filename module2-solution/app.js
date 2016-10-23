(function () {
  'use strict';

  angular.module('ShoppingListCheckOff',[])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController',AlreadyBoughtController)
  .service('ShoppingListCheckOffService',ShoppingListCheckOffService);

  ToBuyController.$inject=['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService){
    var buyCtrl = this;
    buyCtrl.itemsToBuy = ShoppingListCheckOffService.getItemsToBuy();

    buyCtrl.markItemAsBought = function(itemIndex) {
                                  ShoppingListCheckOffService.markItemAsBought(itemIndex);}
  }

  AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService){
    var boughtCtrl = this;

    boughtCtrl.itemsBought = ShoppingListCheckOffService.getItemsBought();
  }

  function ShoppingListCheckOffService(){
    var checkOffService = this;

    var itemsToBuyList = [
      {"name":"apples","quantity":"3"},
      {"name":"oranges","quantity":"5"},
      {"name":"muffins","quantity":"2"},
      {"name":"mango juice","quantity":"2 bottles"},
      {"name":"carrot","quantity":"7"},
      {"name":"cookies","quantity":"10"}
    ]

    var itemsBoughtList = [];

    checkOffService.getItemsToBuy = function(){
      return itemsToBuyList;
    }

    checkOffService.getItemsBought = function(){
      return itemsBoughtList;
    }

    checkOffService.markItemAsBought = function(itemIndex){
      itemsBoughtList.push(itemsToBuyList[itemIndex]);
      itemsToBuyList.splice(itemIndex,1);
    }

  }

})();

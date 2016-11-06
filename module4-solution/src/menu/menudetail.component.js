(function(){

  'use strict';

  angular.module('Data')
  .component('menuDetail',{
    templateUrl: 'src/menu/template/menudetail.template.html',
    bindings: {
      items: "<",
      name: "<"
    }
  });

})();

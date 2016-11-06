(function(){

  'use strict';

  angular.module('MenuApp')
  .component('menuList', {
    templateUrl: 'src/menu/template/menulist.template.html',
    bindings: {
      items: '<'
    }
  });

})();

angular.module('frontEndTestApp').component('list', {
    templateUrl: 'scripts/components/list/list.html',
    bindings:{
      data:'<'
    },
    controller: function(){

      var vm = this;

      vm.$onInit = function () {
            vm.test = 'blah blah';
      } 


    }
  });
angular.module('frontEndTestApp').component('listItem', {
  templateUrl: 'scripts/components/listItem/listItem.html',
  bindings: {
    route: '<'
  },
  controller: function () {

    var vm = this;

    vm.$onInit = function () {
      vm.test = 'blah blah';
    }


  }
});


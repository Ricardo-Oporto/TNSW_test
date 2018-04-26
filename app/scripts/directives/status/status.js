angular.module('frontEndTestApp').directive('status', [
    function () {
        return {
            restrict: 'E',
            scope: {
                status: '<time',
                variance: '<',
            },
            template: "<span class=\"{{statusText}}\">{{statusText}}</span>",
            link: function ($scope, iElement, iAttrs) {

                switch (true) {
                    case ($scope.status < 0):
                        $scope.statusText = 'Early';
                        break;
                    case ($scope.status < $scope.variance):
                        $scope.statusText = 'On Time';
                        break;
                    case ($scope.status > $scope.variance):
                        $scope.statusText = 'Late';
                        break;
                    default:
                       throw 'text for status text not matched in status directive';
                       
                }

            }
        };
    }
]);
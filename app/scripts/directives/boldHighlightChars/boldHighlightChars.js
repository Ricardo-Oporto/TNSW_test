angular.module('frontEndTestApp').directive('boldHighlightChars', [
    function () {
      return {
        restrict: 'E',
        scope: {
          boldHighlightChars: '<text',
          start: '<',
          length: '<'
        },
        template: "<span style=\"font-weight:700\">{{boldText}}</span><span>{{remainingChars}}</span>",
        link: function ($scope, iElement, iAttrs) {
  
          if ($scope.boldHighlightChars === 'UNKNOWN') {
            $scope.remainingChars = $scope.boldHighlightChars;
            return;
          }
  
          $scope.boldText = $scope.boldHighlightChars.substring($scope.start, $scope.length);
          $scope.remainingChars = $scope.boldHighlightChars.substring($scope.start + $scope.length, $scope.boldHighlightChars.length);
  
        }
      };
    }
  ]);
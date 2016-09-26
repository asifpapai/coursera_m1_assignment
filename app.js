(function () {
'use strict';

angular.module('Assignment1', [])
.controller('lunchCheckerController', lunchCheckerController);

lunchCheckerController.$inject = ['$scope'];

function lunchCheckerController ($scope) {
  $scope.lunchCounter = function() {
    if($scope.lunchChecker == null || $scope.lunchChecker == ''){
      $scope.message="Please enter data first";
      $scope.colorOutput="red";
    }
    else if($scope.lunchChecker != null ){
      var comma = ',';
      var arrayOfStrings = ($scope.lunchChecker).split(comma);
      if(arrayOfStrings.length>3){
        $scope.message="Too much!";
        $scope.colorOutput="green";
      }
      else if(arrayOfStrings.length>=1 && arrayOfStrings.length<=3){
            $scope.message="Enjoy!";
            $scope.colorOutput="green";
      }}
}
}
})();

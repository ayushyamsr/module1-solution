(function(){
'use strict';

angular.module('LunchCheck',[])
.controller('LunchCheckController',LunchCheckController);

LunchCheckController.$inject=['$scope'];
function LunchCheckController($scope)
{
  $scope.fname="Ayushya";
/*  $scope.message="";
  var checkIfTooMuch=function(){
        var arr=$scope.name.split(",");
        if(arr.length==0)
          $scope.message="Please enter data first";
        else if(arr.length>0 && arr.length<=3)
          $scope.message="Enjoy!";
        else
          $scope.message="Too much!" ;
  };
*/
}




})();

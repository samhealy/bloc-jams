//require('./landing');
//require('./album');
//require('./collection');
//require('./profile');

angular.module('BlocJams', []).controller('Landing.controller', ['$scope', function($scope) {
  $scope.subText = "Turn the music up!";

  $scope.subTextClicked = function() {
     $scope.subText += '!';
  };
}]);
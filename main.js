var app = angular.module('myApp', []);

app.controller('randomNumber', function($scope) {

  function getNumber() {
    $scope.randomNumber = Math.ceil( Math.random() * 100);
    $scope.guessed = false;
    return $scope.randomNumber;
  }

  getNumber();
  $scope.showRetry = false;
  $scope.showNumber = false;

  $scope.check = function() {
    $scope.guessed = true;
    $scope.shownNumber = $scope.randomNumber;
    if ($scope.userInput > $scope.randomNumber) {
      $scope.message = 'Your number is too high!';
      return $scope.message;
    } else if ($scope.userInput < $scope.randomNumber) {
      $scope.message = 'Your number is too low!';
      return $scope.message;
    } else {
      $scope.message = 'You got it!';
      $scope.showRetry = true;
      $scope.guessed = false;
      return $scope.message;
    }
  };

  $scope.giveUp = function() {
    $scope.showNumber = true;
    $scope.message = '';
    $scope.userInput = '';
    getNumber();
  };

  $scope.startOver = function() {
    getNumber();
    $scope.showRetry = false;
    $scope.guessed = false;
    $scope.userInput = '';
    $scope.message = '';
  };

});

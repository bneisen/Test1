var myApp = angular.module('myApp', []);

myApp.controller('cardsListController', ['$scope', function ($scope) {
    $scope.cards = [{ id: 1 }, { id: 2 }];
}]);

myApp.controller('GreetingController', ['$scope', function ($scope) {
    $scope.greeting = 'Hola!';
}]);

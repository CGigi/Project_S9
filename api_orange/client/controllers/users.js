var myApp = angular.module('myApp');

myApp.controller('UsersController', ['$scope', '$http', '$location', '$routeParams', '$rootScope', function($scope, $http, $location, $routeParams, $rootScope){
	console.log('UsersController loaded...');

	$scope.getUsers = function(){
		$http.get('/clients').success(function(response){
			$scope.users = response;
			$scope.userId = $rootScope.userId;
		});
	}

	$scope.getUser = function(){
		$http.get('/clients/' + $rootScope.userId).success(function(response){
			$scope.user = response;
		});
	}


}]);

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
		var clienteId = $routeParams._id; 
		$http.get('/clients/' +clienteId).success(function(response){
			$scope.user = response; 
		});
	}

	$scope.deleteUser = function(user){
		var clienteId = user._id; 
		$http.delete('/clients/' +clienteId).success(function(response){
			$scope.getUsers();
             //or this
            $scope.users.splice(user._id,1);
		});
	}

	$scope.editUser = function(user){
		$scope.clickedUser = user;
	}

	$scope.updateUser = function(user){
		var clienteId = user._id; 
		$http.post('/clients/' +clienteId).success(function(response){
			$scope.getUsers();
             //or this
            //$scope.users.splice(user._id,1);
		});
	}


}]);

var myApp = angular.module('myApp');

myApp.controller('LoginController', ['$scope', '$http', '$location', '$routeParams', '$rootScope', function($scope, $http, $location, $routeParams, $rootScope){
	console.log('LoginController loaded...');

	$scope.submit = function(){
			
			$http.get('/clients').success(function(response){
				var users = response;
				for(i=0; i<users.length; i++){
					if(users[i].identity.email == $scope.email && users[i].password == $scope.password){
						$rootScope.userId = users[i]._id;
						$rootScope.loggedIn = true;
						$location.path('/clients');
					}
				}
				if(!$rootScope.loggedIn){
					$rootScope.loggedIn = false;
					$scope.loggedIn = false;
					$location.path('/login');
				}
				
			});
		
	}

	//$scope.submit = function(){

		
		// if($scope.email == "jalil@jalil.com" && $scope.password == "admin"){
		// 	$rootScope.loggedIn = true;
		// 	$location.path('/clients');
		// }
		// else{
		// 	$rootScope.loggedIn = false;
		// 	$location.path('/');
		// }
	//}

	
}]);
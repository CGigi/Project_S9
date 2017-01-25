var myApp = angular.module('myApp',['ngRoute']);

myApp.config(function($routeProvider){
	$routeProvider.when('/', {
		controller:'UsersController',
		templateUrl: 'views/users.html'

	})
	.when('/clients/:_id', {
		controller:'UsersController',
		templateUrl: 'views/user.html'
	})
	.when('/delete/:_id', {
		controller:'UsersController',
		templateUrl: 'views/users.html'
		
	})
	.when('/login', {
		controller:'LoginController',
		templateUrl: 'views/login.html'
	})
	.when('/delete', {
		controller:'LoginController',
		templateUrl: 'views/login.html'
	})
});

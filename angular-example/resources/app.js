	var myApp = angular.module('myApp', ['ngRoute']);


	myApp.config(function($routeProvider) {
		$routeProvider

			
			.when('/', {
				templateUrl : 'pages/dashboard/dashboard.html',
				controller  : 'dashboardController'
			})


			.when('/about', {
				templateUrl : 'pages/about/about.html',
				controller  : 'aboutController'
			})


			.when('/contact', {
				templateUrl : 'pages/contact/contact.html',
				controller  : 'contactController'
			});
	});
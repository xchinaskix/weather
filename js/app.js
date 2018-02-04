var app = angular.module('app',['ngRoute']);
app.config(function($routeProvider){
	$routeProvider
	// Bradford page main
	.when('/bradford',{
		templateUrl : 'pages/bradford/bradford.html',
		controller : 'bradfordCtrl'
	})	
		// Bradford page stat
	.when('/bradford/stat',{
		templateUrl : 'pages/bradford/bradfordStat.html',
		controller : 'bradfordCtrl'	
	})
	// Main page Oxford
	.when('/',{
		templateUrl : 'pages/oxford/oxford.html',
		controller : 'oxfordCtrl'
	})
	// Oxford page stat
	.when('/oxford/stat',{
		templateUrl : 'pages/oxford/oxfordStat.html',
		controller : 'oxfordCtrl'	
	})
	// Sheffield page main
	.when('/sheffield',{
		templateUrl : 'pages/sheffield/sheffield.html',
		controller : 'sheffieldCtrl'
	})	
	// Sheffiled page stat
	.when('/sheffield/stat',{
		templateUrl : 'pages/sheffield/sheffieldStat.html',
		controller : 'sheffieldCtrl'
	})
	// Southampton page main
	.when('/southampton',{
		templateUrl : 'pages/southampton/southampton.html',
		controller : 'southamptonCtrl'
	})	
	// Southampton page stat
	.when('/southampton/stat',{
		templateUrl : 'pages/southampton/southamptonStat.html',
		controller : 'southamptonCtrl'
	})
	// Valley page main
	.when('/valley',{
		templateUrl : 'pages/valley/valley.html',
		controller : 'valleyCtrl'
	})	
	// Valley page stat
	.when('/valley/stat',{
		templateUrl : 'pages/valley/valleyStat.html',
		controller : 'valleyCtrl'
	})
  .otherwise({
    redirectTo: '/'
	});
});
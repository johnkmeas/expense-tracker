var myApp = angular.module("myApp", ["ngRoute"]);

myApp.config(function($routeProvider){
	$routeProvider.when("/", {
		controller: "ExpenseController",
		templateUrl: "views/expense.html"
	})
	.when("/expense", {
		controller: "ExpenseController",
		templateUrl: "views/expense.html"
	})
	.when("/expense/details/:id", {
		controller: "ExpenseController",
		templateUrl: "views/expense-details.html"
	})
	.when("/expense/add", {
		controller: "ExpenseController",
		templateUrl: "views/add-expense.html"
	})	
	.when("/expense/edit/:id", {
		controller: "ExpenseController",
		templateUrl: "views/edit-expense.html"
	})
	.otherwise({
		redirectTo: "/"
	})	
});
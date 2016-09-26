var myApp = angular.module("myApp");

myApp.controller("ExpenseController", 
	["$scope", "$http", "$location", "$routeParams", function($scope, $http, $location, $routeParams){
	console.log("ExpenseController loaded ....")

	$scope.getExpenses = function(){
		$http.get("/api/expense").success(function(response){
			$scope.expenses = response;
		})
	}

	$scope.getExpense = function(){
		var id = $routeParams.id;
		$http.get("/api/expense/" + id).success(function(response){
			$scope.expenses = response;
		})
	}

	$scope.addExpense = function(){
		$http.post("/api/expense/", $scope.expenses).success(function(response){
			window.location.href="#/expense";
		})
	}	

	$scope.updateExpense = function(){
		var id = $routeParams.id;
		$http.put("/api/expense/" + id, $scope.expenses).success(function(response){
			window.location.href="#/expense";
		})
	}

	$scope.removeExpense = function(id){
		$http.delete("/api/expense/" + id).success(function(response){
			window.location.href="#/expense";
		})
	}				
}])
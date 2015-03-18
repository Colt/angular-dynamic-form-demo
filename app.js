var demoApp = angular.module("demoApp", []);

demoApp.controller('SimpleController', function($scope) {
	$scope.choices = [{id: 'choice1'}, {id: 'choice2'}, {id: 'choice3'}];

	$scope.addNewChoice = function() {
	  var newItemNo = $scope.choices.length+1;
	  $scope.choices.push({'id':'choice'+newItemNo});
	};

	$scope.showAddChoice = function(choice) {
  	return choice.id === $scope.choices[$scope.choices.length-1].id;
	};

});

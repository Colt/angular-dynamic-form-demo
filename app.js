var demoApp = angular.module("demoApp", []);

demoApp.controller('SimpleController', function($scope) {
	$scope.choices = [{id: 'choice1'}, {id: 'choice2'}, {id: 'choice3'}];

	$scope.addNewChoice = function() {
	  var newItemNo = $scope.choices.length+1;
	  $scope.choices.push({'id':'choice'+newItemNo});
	};

});

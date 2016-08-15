//Create controller for module
angular.module('app').controller('HomeController', function($scope){
	//Create arrays to hold user input and variables to hold later calculations
	$scope.incomeEntries = [];
	$scope.expenseEntries = [];
	$scope.newIncome = 0;
	$scope.newExpense = 0;
	$scope.amountLeft = 0;

	//Get and store array information from user inputs for Income
	$scope.addIncomeEntries = function() {
		// push the users inputs objects to the array
		$scope.incomeEntries.push({
			// create objects based on user inputs for Income
			descInc : $scope.descInc,
			// parse the amount to get a number with decimals for change amounts
			amountInc : parseFloat($scope.amountInc),


		});
			// output calculations of new total income and amount left after subtracting expenses
			$scope.newIncome += parseFloat($scope.amountInc);
			$scope.amountLeft = $scope.newIncome - $scope.newExpense;
	};


		//Get and store array information from user inputs for Expenses
	$scope.addExpenseEntries = function() {
		// push the users input objects to the array
		$scope.expenseEntries.push({
			// create objects based on user inputs for Expenses
			descExp : $scope.descExp,
			// parse the amount to get a number with decimals for change amounts
			amountExp : parseFloat($scope.amountExp)


		});
				// output calculations of new total expenses and amount left after subtracting expenses
				$scope.newExpense += parseFloat($scope.amountExp);
				$scope.amountLeft = $scope.newIncome - $scope.newExpense;
	};

});
	app.controller("myCtrl", function($scope, $http) {
		$scope.varb = 0;
		$http.get("https://api.myjson.com/bins/1bc6oh").then(function (response){
			$scope.myItems = response.data.Items;
		});
	});
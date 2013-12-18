angular.module('mean.system').controller('IndexController', ['$scope', '$http', 'Global', function ($scope, $http, Global) {
    $scope.global = Global;
    $scope.method = "GET";
		//http://datsy-dev.azurewebsites.net/search/tag

		$scope.httpRequest = function(){
			var url = "http://" + $scope.url;
			var method = $scope.method;
	    $http({method: method, url: url})
		    .success(function(data, status, headers, config){
		    	$scope.response = data;
		    })
		    .error(function(data, status, headers, config){
		    	$scope.response = "Request Error!";
		    });
	  }
}]);
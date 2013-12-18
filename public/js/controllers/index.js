angular.module('mean.system').controller('IndexController', ['$scope', '$http', 'Global', function ($scope, $http, Global) {
    $scope.global = Global;
    $scope.response = "testing123";

    $http({method: 'GET', url: 'http://datsy-dev.azurewebsites.net/search/tag'})
	    .success(function(data, status, headers, config){
	    	$scope.response = data;
	    })
	    .error(function(data, status, headers, config){
	    	$scope.response = "Request Error!";
	    });
}]);
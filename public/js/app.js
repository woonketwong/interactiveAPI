angular.module('mean', ['ngCookies', 'ngResource', 'ngRoute', 'ui.bootstrap', 'ui.route', 'mean.system', 'mean.articles']);
angular.module('mean.articles', []);
var app = angular.module('mean.system', []);

//Setting up route
app.config(['$routeProvider',
    function($routeProvider) {
      $routeProvider
	      .when('/', {
	      	  controller: 'IndexController',
	          templateUrl: 'views/index.html'
	      }).
	      otherwise({
	          redirectTo: '/'
	      }
			);
    }
]);

//Setting HTML5 Location Mode
app.config(['$locationProvider',
    function($locationProvider) {
        $locationProvider.hashPrefix("!");
    }
]);
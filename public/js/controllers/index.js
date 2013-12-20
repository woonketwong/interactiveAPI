angular.module('mean.system').controller('IndexController', ['$scope', '$http', 'Global', function ($scope, $http, Global) {
	  // var jsonMarkup = require('json-markup');
    $scope.global = Global;
    $scope.method = "GET";
		// datsy-dev.azurewebsites.net/search/tag
		// api.github.com/users/woonketwong

		$scope.httpRequest = function(){
			console.log("hello");
			var url = "https://" + $scope.url;
			// var url = "http://" + "datsy-dev.azurewebsites.net/search/tag";
			var method = $scope.method;
			console.log(url);
			// console.log("defaults headers:", $http.defaults.headers);
			// $http.defaults.headers.common.get = {'Access-Control-Expose-Headers': 'custom-header'};
			// console.log("defaults headers:", $httpProvider.defaults.headers);
	    $http({method: method, url: url})
		    .success(function(data, status, headers, config){
		    	var resultHtmlStatus = jsonMarkup(status);
		    	var resultHtmlHeaders = jsonMarkup(headers());
		    	console.log(headers);
		    	console.log(status);
		    	console.log(config);
		    	// console.log(headers());
		    	var resultHtmlBody = jsonMarkup(data);
		    	$scope.template = "<small class='responseGroup'>Status</small>" + resultHtmlStatus +
		    	                  "<small class='responseGroup'>Headers</small>" + resultHtmlHeaders  +
		    	                  "<small class='responseGroup'>Body</small>" + resultHtmlBody; 
		    })
		    .error(function(data, status, headers, config){
		    	$scope.response = "Request Error!";
		    });
	  }


var INDENT = '    ';

var type = function(doc) {
	if (doc === null) return 'null';
	if (Array.isArray(doc)) return 'array';
	if (typeof doc === 'string' && /https?:/.test(doc)) return 'link';

	return typeof doc;
};

var escape = function(str) {
	return str.replace(/</g, '&lt;').replace(/>/g, '&gt;');
};

var jsonMarkup = function(doc) {
	var indent = '';

	var forEach = function(list, start, end, fn) {
		if (!list.length) return start+' '+end;

		var out = start+'\n';

		indent += INDENT;
		list.forEach(function(key, i) {
			out += indent+fn(key)+(i < list.length-1 ? ',' : '')+'\n';
		});
		indent = indent.slice(0, -INDENT.length);

		return out + indent+end;
	};

	var visit = function(obj) {
		if (obj === undefined) return '';

		switch (type(obj)) {
			case 'boolean':
			return '<span class="json-markup-bool">'+obj+'</span>';

			case 'number':
			return '<span class="json-markup-number">'+obj+'</span>';

			case 'null':
			return '<span class="json-markup-null">null</span>\n';

			case 'string':
			return '<span class="json-markup-string">"'+escape(obj)+'"</span>';

			case 'link':
			return '<span class="json-markup-string">"<a href="'+escape(obj)+'">'+escape(obj)+'</a>"</span>';

			case 'array':
			return forEach(obj, '[', ']', visit);

			case 'object':
			var keys = Object.keys(obj).filter(function(key) {
				return obj[key] !== undefined;
			});

			return forEach(keys, '{', '}', function(key) {
				return '<span class="json-markup-key">'+key + ':</span> '+visit(obj[key]);
			});
		}

		return '';
	};

	return '<div class="json-markup">'+visit(doc)+'</div>';
};



}]);


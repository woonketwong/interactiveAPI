app.directive('showResponse', function($compile){
	var renderTemplate = {
		scope: true,
		link: function ( scope, element, attrs ){
			var el;
			attrs.$observe( 'template', function ( tpl ) {
        if ( angular.isDefined(tpl)) {
          // compile the provided template against the current scope
          el = $compile(tpl)(scope);

          // stupid way of emptying the element
          element.html("");

          // add the template content
          element.append(el);
        }
      });
		}
	};
	return renderTemplate;
});
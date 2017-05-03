adminAPP.directive('lbHeaderDirective', function() {
    "use strict";
    return {
        restrict: 'A',
        replace: true,
        scope: true,
        templateUrl: 'views/directives/lb_header_directive.html',
        controller: function($scope, $element, $attrs, $transclude) {
            $scope.header_add = function(type){
            	switch(type){
            		case "001":
            			break;
            		case "002":
            			break;
            		case "003":
            			break;
            		case "004":
            			break;
            			
            	}
            }
			$scope.changeBgColor = function($event){
				var navBgColor = ($event && $event.target.dataset.val) ||""
				var navNode = document.querySelector(".navbar");
//				console.log(navBgColor)
				navNode && navNode.style && (navNode.style.backgroundColor = navBgColor)
			}
        }
    };
});

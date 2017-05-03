// 侧边栏
adminAPP.directive('lbAsideDirective',['RequestService', 'UtilsService', '$timeout', function(RequestService,utilService,$timeout) {
    "use strict";
    return {
        restrict: 'A',
        replace: true,
        scope: true,
        templateUrl: 'views/directives/lb_aside_directive.html',
        controller: function($scope, $element, $attrs) {
        	RequestService.request({
		            token: 'aside.json',
		            method: 'get',
		            success: function(data) {
		            	$scope.asideList = data ||[]
//		                UtilsService.href('/');
		            }
		       });
            $scope.showAsideItem = function(aside){
            	aside.show = !aside.show;
            }
        }
    };
}]);
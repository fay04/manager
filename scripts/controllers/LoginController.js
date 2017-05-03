// 登录
adminAPP.controller('LoginController', ['$scope', 'UtilsService', 'RequestService','permissions','CacheService', 
function($scope, UtilsService, RequestService,permissions,CacheService) {
    "use strict";
    /**
     * 密码登录
     */
    $scope.login = function() {
    	console.log($scope.pwdLoginInfo)
        RequestService.request({
            token: 'login',
            method: 'POST',
            data: $scope.pwdLoginInfo,
            success: function(data) {
            	RequestService.request({
		            token: 'permission',
		            method: 'get',
		            data: $scope.pwdLoginInfo,
		            success: function(data) {
		            	CacheService.store("permissions",data)
					    permissions.setPermissions(data);
//					    console.log(data)
					    
                		UtilsService.href('/index');
		            }
		        });
            }
        });
    };
}]);
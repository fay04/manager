adminAPP.controller('MainCtroller', function($scope, $location, permissions,CacheService) {
	var permission = CacheService.store("permissions");
	permissions.setPermissions(permission);
//	console.log(permission)
  $scope.$on('$routeChangeStart', function(scope, next, current) {
    var permission = next.$$route?next.$$route.permission:"";
    console.log(permission)
   if(angular.isString(permission) && !permissions.hasPermission(permission)){
      $location.path('/unauthorized');
    }
  });
});
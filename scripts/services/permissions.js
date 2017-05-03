adminAPP.factory('permissions', function ($rootScope) {
    var permissionList;
    return {
      setPermissions: function(permissions) {
        permissionList = permissions;
//      console.log(permissionList)
        $rootScope.$broadcast('permissionsChanged');
      },
      hasPermission: function (permission) {
        permission = permission.trim();
//      console.log(permissionList)
        if(permissionList && permissionList.indexOf(permission) > -1){
          return true;
        }else{
          return false;
        }
      }
   };
  });
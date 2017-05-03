// 登录
adminAPP.controller('ArticleController', ['$scope', 'UtilsService', 'RequestService', function($scope, UtilsService, RequestService) {
    
  
  var vm = $scope.vm = {};
  //弹出式日历触发函数
  vm.open = function($event) {
    $event.preventDefault();
    $event.stopPropagation();

    vm.opened = true;
  };
  //输出格式控制,来源:官方date filter
  vm.formats = ['yyyy-MMMM-dd', 'yyyy/MM/dd', 'yyyy.MM.dd', 'shortDate'];
  vm.format = vm.formats[1];
   //自定义选项
  vm.dateOptions = {
    formatYear: 'yy',
    startingDay: 1,
    formatDayTitle: 'yyyy MMMM'
  };
  
  				RequestService.request({
		            token: 'articlelist.json',
		            method: 'get',
		            success: function(data) {
//		            	console.log(data)
		            	$scope.jsonData = data;
		            }
		       });
		       
}]);
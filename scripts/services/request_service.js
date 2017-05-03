
adminAPP.factory('RequestService', ['$http', 'UtilsService', function($http, UtilsService) {
    "use strict";
    var baseUrl = 'http://rapapi.org/mockjs/17316/';
    var jsonUrl = '../../JSON/';
    var tokenMap = {
    	//登录界面
        "login":'login',
        "aside.json":"aside_list.json",
        "articlelist.json":"article_list.json",
        "permission":"permission.json"

    };
    return {
        tokenMap: tokenMap,
        request: function(reqConfig) {
        	
            var url = tokenMap[reqConfig.token];
            if(reqConfig.token == "permission" && reqConfig.data && reqConfig.data.userName){
            	url = reqConfig.data.userName + "_" + url;
            }
            if (!url) {
                console.log('请求token错误 - ' + reqConfig.token);
                return;
            }
            url = (url.indexOf("json") > -1?jsonUrl + url:baseUrl + url);
            
            // 请求的对象
            var reqObj = {
                url: url,
                method: reqConfig.method || 'GET',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            };
            // body中的数据C
            if(reqConfig.data) {
                reqObj.data = reqConfig.data;
            }
            // 发送请求
           $http(reqObj)
                .success(function(data, status, headers, config) {
                	 switch (data.code) {
                	 	case 200:
                    		reqConfig.success(data.result);
                	 		break;
                	 	case 400:
                	 		break;
                	 }
                })

                .error(function(data, status, headers, config) {
                	
                    reqConfig.error && reqConfig.error(data);
                })
        }
    };
}]);
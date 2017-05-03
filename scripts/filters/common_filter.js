// 根据id在ConfigService中查找对应内容
adminAPP.filter('lbConfigFilter', ['ConfigService', function(ConfigService) {
    "use strict";
    return function (id, name) {
        return (ConfigService[name] || {})[id];
    }
}]);

// 添加图片路径
adminAPP.filter('lbAddImgBaseUrl', ['ConfigService', function(ConfigService) {
    "use strict";
    return function(url) {
        return ConfigService.imgBaseUrl + url;
    };
}]);

// 时间戳转UTC日期
adminAPP.filter('lbUTCDate', function() {
    "use strict";
    return function(timestamp, format) {
        var d = new Date(timestamp);
        var year = d.getUTCFullYear(),
            month = d.getUTCMonth() + 1,
            day = d.getUTCDate(),
            hour = d.getUTCHours(),
            minute = d.getUTCMinutes();
        if (hour < 10) {
            hour = '0' + hour;
        }
        if (minute < 10) {
            minute = '0' + minute;
        }
        return format.replace(/yyyy/g, year).replace(/MM/g, month).replace(/dd/g, day).replace(/HH/g, hour).replace(/mm/g, minute);
    }
});
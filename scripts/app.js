// app.js
var adminAPP = angular.module('adminAPP', ['ngRoute', 'ui.bootstrap']), permissionList;

// 配置运行时
adminAPP.run(['$rootScope', 'UtilsService', 'RequestService','permissions', function($rootScope, UtilsService, RequestService,permissions) {
   // 是否显示loading页面
    $rootScope.loading = false;
    // 是否显示头部
    $rootScope.showHeader = false;
    $rootScope.utils = UtilsService;
    $rootScope.t_logout = function() {
        RequestService.request({
            token: 't_logout',
            method: 'POST',
            success: function(data) {
                UtilsService.href('/');
            }
        });
    };
    $rootScope.$on('$routeChangeStart', function(e, next, current) {
        if (next.$$route && next.$$route.showHeader) {
            $rootScope.showHeader = true;
        } else {
            $rootScope.showHeader = false;
        }
    });
}]);

// 配置路由
adminAPP.config(['$routeProvider', '$locationProvider', '$httpProvider', function($routeProvider, $locationProvider, $httpProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
        .when('/', {
            templateUrl: 'views/login/login.html',
            controller: 'LoginController',
            showHeader: false
        })
        .when('/unauthorized', {
            templateUrl: 'views/error/unauthorized.html',
            controller: 'UnauthorizedController',
            showHeader: true
        })
        .when('/error', {
            templateUrl: 'views/error/error.html',
            controller: 'ErrorController',
            showHeader: true
        })
        /*login*/
        .when('/login', {
            templateUrl: 'views/login/login.html',
            controller: 'LoginController',
            showHeader: false
        })
        /*index*/
        .when('/index', {
            templateUrl: 'views/index/index.html',
            controller: 'IndexController',
            showHeader: true
        })
        /*资讯管理*/
        .when('/information/index', {
            templateUrl: 'views/information/index.html',
            controller: 'ArticleController',
            showHeader: true,
            permission: 'article_list' 
        })
        /*图片管理*/
        .when('/pic/index', {
            templateUrl: 'views/picture/index.html',
            controller: 'PictureController',
            showHeader: true
        })
        /*品牌管理*/
        .when('/product/brand', {
            templateUrl: 'views/product/brand.html',
            controller: 'BrandController',
            showHeader: true
        })
        /*分类管理*/
        .when('/product/classification', {
        	templateUrl:'views/product/classification.html',
        	controller:"ClassificationController",
        	showHeader:true
        })
        /*产品列表*/
        .when('/product/list', {
        	templateUrl:'views/product/list.html',
        	controller:"ProductController",
        	showHeader:true
        })
        /*评论列表*/
        .when('/comment/list', {
        	templateUrl:'views/comment/list.html',
        	controller:'CommentController',
        	showHeader:true
        })
        /*意见反馈*/
        .when('/comment/opinion', {
        	templateUrl:'views/comment/opinion.html',
        	controller:'OpinionController',
        	showHeader:true
        })
        /*角色*/
        .when('/admin/role', {
        	templateUrl:'views/admin/admin-role.html',
        	controller:'RoleController',
        	showHeader:true,
            permission: 'manager_role' 
        })
        /*权限*/
        .when('/admin/permission', {
        	templateUrl:'views/admin/admin-permission.html',
        	controller:'PermissionController',
        	showHeader:true,
            permission: 'manager_permission' 
        })
        /*管理员列表*/
        .when('/admin/list', {
        	templateUrl:'views/admin/admin-list.html',
        	controller:'AdminListController',
        	showHeader:true,
            permission: 'manager_list' 
        })
        .otherwise({
            redirectTo: '/'
        });
    $httpProvider.interceptors.push('InterceptorService');
}]);
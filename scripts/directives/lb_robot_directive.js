// 机器人展示
adminAPP.directive('lbRobotDirective', function() {
    return {
        restrict: 'A',
        replace: true,
        scope: {
            robot: '='
        },
        templateUrl: 'views/directives/lb_robot_directive.html',
        controller: function() {
            //
        }
    };
});
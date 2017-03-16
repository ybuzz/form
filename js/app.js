var app =angular.module("app", [])
app.controller("password",['$scope',function ($scope) {
    var vm=this
}])
.directive('check',function () {
    return {
        restrict: 'E A',
        templateUrl: '../html/tpl.html',
        scope: {
            checkValue: '@'
        },
        replace: 'true',
        link:function (scope,ele,atr) {
            scope.check=function () {
                if(scope.value==scope.checkValue){
                    scope.pass=false
                }else {
                    scope.pass=true
                }
            }





        }
    }
})
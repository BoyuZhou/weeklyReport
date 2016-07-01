var mainModule = angular.module('mainModule', ['ui.router']);



mainModule.run(function ($http, $state, $location) {
    //$http({
    //    url: '/api/validate',
    //    method: 'GET'
    //}).success(function () {
    //    var page = $location.$$path;
    //    $state.go(page.substring(1));
    //}).error(function () {
    //    $state.go('login')
    //});
});
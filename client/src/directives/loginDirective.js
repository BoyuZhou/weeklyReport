/**
 * Created by guzi on 2016/6/23.
 */
mainModule.directive('login', function(){
    return {
        restrict: 'A',
        templateUrl: 'template/login.html',
        controller: 'loginController',
        controllerAs: 'vm',
        link: function(scope, iElement, iAttrs){

        }
    }
});


/**
 * Created by guzi on 2016/6/23.
 */
mainModule.controller('loginController', ['$scope', 'data', '$state', function($scope, data, $state){
    var vm = this;
    console.dir($scope);
    vm.go = function () {
        console.log(111);
        $state.go('home.user');
    }

}]);
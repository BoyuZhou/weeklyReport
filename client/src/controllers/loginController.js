/**
 * Created by guzi on 2016/6/23.
 */
mainModule.controller('loginController', ['$scope', 'data', '$state', function($scope, data, $state){
    var vm = this;
    vm.submit = function () {
        $state.go('home.user');
    }


}]);
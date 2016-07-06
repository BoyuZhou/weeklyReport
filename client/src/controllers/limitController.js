mainModule.controller('limitController', ['$scope', 'limitService', function($scope, limitService) {
    var vm = this;
    vm.data = limitService.data;
}]);
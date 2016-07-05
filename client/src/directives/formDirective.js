mainModule.directive('xcjForm', function ($rootScope) {
    return {
        restrict: 'EA',
        replace:true,
        scope: {
            data: "="
        },
        link: function (scope, element, attrs) {
             scope.commit = function () {
                 $rootScope.promp = false;
             }
        },
        templateUrl: 'template/formTemplate.html'
    }
});

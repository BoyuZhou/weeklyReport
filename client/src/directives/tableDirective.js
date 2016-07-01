mainModule.directive('xcjTable', function () {
    return {
       redirect: 'EA',
        replace: true,
        transclude: true,
        scope: {
          data: '='
        },
        link: function (scope, element, attrs) {

        },
        templateUrl: 'template/tableTemplate.html'
    }
});
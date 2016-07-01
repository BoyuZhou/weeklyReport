mainModule.directive('xcjForm', function () {
    return {
        redirect: 'EA',
        replace:true,
        scope: {
            data: "="
        },
        link: function (scope, element, attrs) {

        },
        templateUrl: 'template/formTemplate.html'
    }
});
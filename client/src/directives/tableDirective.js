mainModule.directive('xcjTable', function (mainService, $compile, $rootScope) {
    return {
       redirect: 'EA',
        replace: true,
        transclude: true,
        scope: {
          data: '='
        },
        link: function (scope, element, attrs) {
            //是否显示控制项
             scope.data.control = scope.data.control || false;
            //是否显示分页标签
            scope.data.page = scope.data.page || false;
            //是否显示查看控制按钮
            scope.data.get = scope.data.get || false;
            //是否显示编辑控制按钮
            scope.data.change = scope.data.change || false;
            //是否显示查看成员控制按钮
            scope.data.group = scope.data.group || false;
            //是否显示查看权限控制按钮
            scope.data.limit = scope.data.limit || false;
            //是否显示停用控制按钮
            scope.data.stop = scope.data.stop || false;

            //停用方法
            scope.stop = function (e) {
                if($(e).parent().parent().hasClass('danger')){
                    $(e).parent().parent().removeClass('danger');
                }else{
                    $(e).parent().parent().addClass('danger');
                }

            };

            //查看方法
            scope.getInfo = function () {
                scope.userInfo = mainService[scope.data.classify].userInfo;
                  var html = mainService[scope.data.classify].getInfo;
                $('#clude').html($compile(html)(scope));
                $rootScope.promp = true;
            };

            //查看权限信息
            scope.getLimit = function () {
                scope.limit = mainService[scope.data.classify].limit;
                var html = mainService[scope.data.classify].getLimit;
                $('#clude').html($compile(html)(scope));
                $rootScope.promp = true;
            };

            //查看成员
            scope.getGroup = function () {
                scope.group = mainService[scope.data.classify].group;
                var html = mainService[scope.data.classify].getGroup;
                $('#clude').html($compile(html)(scope));
                $rootScope.promp = true;
            };

            //修改方法
            scope.changeInfo = function () {
                 scope.infoForm = mainService[scope.data.classify].userInfoForm;
                var html = mainService[scope.data.classify].changeInfo;
                $('#clude').html($compile(html)(scope));
                $rootScope.promp = true;
            };
        },
        templateUrl: 'template/tableTemplate.html'
    }
});
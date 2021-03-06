mainModule.directive('departmentTaskPage', function () {
   return {
       restrict: 'EA',
       scope: {
         data: '='
       },
       link: function(scope, element, attrs){

       },
       templateUrl: 'template/dtaskTemplate.html'
   }
});

mainModule.directive('teamTaskPage', function () {
    return {
        restrict: 'EA',
        //scope: {
        //    data: '=',
        //    type: '='
        //},
        controller: 'taskController',
        link: function(scope, element, attrs){
            scope.data = scope.$eval(attrs.data);
            scope.type = scope.$eval(attrs.type);
//点击团队周报页面修改按钮

        },
        templateUrl: 'template/ttaskTemplate.html'
    }
});

mainModule.directive('choiceWeek', function ($filter) {
   return {
       restrict: 'A',
       controller: 'taskController',
       link: function (scope, element, attrs) {
           $('#data_week').datetimepicker({
               language:  'zh-CN',
               weekStart: 0,
               todayBtn:  1,
               autoclose: 1,
               todayHighlight: 1,
               startView: 2,
               minView: 2,
               forceParse: 0,
               showMeridian: 1,
               format: 'yyyy-mm-dd'
           });
           $('#data_week').datetimepicker('setStartDate', '2016-02-01');
           $('#data_week').datetimepicker('setEndDate', '2016-11-01');
           $('#data_week').datetimepicker('setDaysOfWeekDisabled', [0,6]);
           scope.$watch(function () {
               return scope.vm.weekdate;
           }, function (newVal) {
               scope.vm.weekDate = $filter('xcjFormatDate')(newVal, 'week');
           });

       }
   }
});

mainModule.directive('choiceDay', function ($filter) {
    return {
        restrict: 'A',
        controller: 'taskController',
        link: function (scope, element, attrs) {
            $('#data_day').datetimepicker({
                language:  'zh-CN',
                weekStart: 0,
                todayBtn:  1,
                autoclose: 1,
                todayHighlight: 1,
                startView: 2,
                minView: 2,
                forceParse: 0,
                showMeridian: 1,
                format: 'yyyy-mm-dd'
            });
            $('#data_day').datetimepicker('setStartDate', '2016-02-01');
            $('#data_day').datetimepicker('setEndDate', '2016-11-01');
            $('#data_day').datetimepicker('setDaysOfWeekDisabled', [0,6]);
            scope.$watch(function () {
                return scope.vm.daydate;
            }, function (newVal) {
                scope.vm.dayDate = $filter('xcjFormatDate')(newVal, 'day');
            });

        }
    }
});

mainModule.directive('modified', function () {
   return {
       restrict: 'EA',
       transclude: true,
       scope: {
           data: '=',
           footer: '@'
       },
       link: function (scope,element, attrs){
           console.log($(element).children());
       },
       templateUrl: 'template/modifiedTemplate.html'
   }
});


//mainModule.directive('modifter', function (mainService) {
//    return {
//        restrict: 'A',
//        scope: {
//           data: '='
//        },
//        link: function (scope, element, attrs) {
//
//
//        }
//    }
//});
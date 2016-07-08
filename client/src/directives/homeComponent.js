mainModule.directive('homeHeader', function ($compile) {
    return {
        redirect: 'EA',
        replace: true,
        transclude: true,
        scope: {
            title: '@',
            include: '@'
        },
        template: '<div class="row">\
    <div class="col-lg-9">\
    <h3 class="page-header">{{ title }}</h3>\
    </div>\
    <div class="col-lg-3" ng-show="include">\
    <div class="input-group custom-search-form" style="margin-top: 15px">\
    <input type="text" class="form-control" placeholder="搜索...">\
    <span class="input-group-btn">\
    <button class="btn btn-default" type="button">\
    <i class="fa fa-search"></i>\
    </button>\
    </span>\
    </div>\
    </div>\
    <div ng-transclude>\
    </div>\
    </div>'
    }
});

mainModule.directive('xcjPromp', function ($timeout, $rootScope) {
    return {
        redirect: 'EA',
        controller: 'homeController',
        link: function (scope, element, attrs) {
            //console.log(scope);
            //scope.$watch(function(){
            //    return scope.vm.mainService.promp;
            //    }, function(newVal) {
            //    if(newVal){
            //        //scope.tpl = scope.vm.mainService.prompSrc;
            //
            //    }
            //});
            scope.closePromp = function () {
                scope.vm.mainService.promp = false;
                $('.promp').css({'max-width':'500px', marginLeft: '-250px'});
            }
        },
        template:'<div class="promp"  id="promp">\
        <div ng-click="closePromp()"><span class="glyphicon glyphicon-remove" style="position: absolute; right: 10px;top: 20px;z-index: 10;"></span></div>\
                 <div id="clude" class="row" style="padding: 5px" ng-include src="vm.mainService.prompSrc">\
                 </div>\
                 </div>'
    }
});

mainModule.directive('choiceUser', function () {
   return {
       restrict: 'EA',
       replace: true,
       scope: {
         data: '='
       },
       link: function(scope, element, attrs){

       },
       template: '<div class="row">\
                   <div class="col-lg-12">\
    <div class="form-group">\
    <label ng-bind="data.label"></label>\
    <select  class="form-control">\
    <option ng-repeat="item in data.select">{{ item }}</option>\
    </select>\
    </div>\
    </div>\
    </div>'
   }
});
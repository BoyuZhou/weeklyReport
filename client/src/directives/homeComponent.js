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
        link: function (scope, element, attrs) {
            console.log($rootScope);
            scope.$watch(function(){
                return $rootScope.promp;
                }, function(newVal) {
                if(newVal){
                    $timeout(function () {
                        var top = $('#promp').css('height');
                        var left = $('#promp').css('width');
                        $('#promp').css({'margin-top':"-" + parseInt(top)/2 +'px', 'margin-left':"-" + parseInt(left)/2 +'px'});
                    },100);
                }
            });
            scope.closePromp = function () {
                $rootScope.promp = false;
            }

        },
        template:'<div class="container" style="position: absolute;top: 50%; left: 50%;border: 1px solid gainsboro;border-radius: 5px;background: #fff;z-index: 6;max-width: 500px" id="promp">\
        <div ng-click="closePromp()"><span class="glyphicon glyphicon-remove" style="position: absolute; right: 10px;top: 10px;z-index: 10;"></span></div>\
        <div style="position:relative;left:-15px;width: 106.5%;height: 40px;background: gainsboro;border-bottom: 1px solid gainsboro;"></div>\
                 <div id="clude" class="row" style="padding: 5px" ui-view>\
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
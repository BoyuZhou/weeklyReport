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

mainModule.directive('xcjPromp', function ($timeout) {
    return {
        redirect: 'EA',
        transclude: true,
        replace: true,
        controller: 'homeController',
        link: function (scope, element, attrs) {
            scope.$watch('vm.promp', function(newVal) {
                console.log(newVal);
                if(newVal){
                    $timeout(function () {
                        var top = $('#promp').css('height');
                        var left = $('#promp').css('width');
                        $('#promp').css({'margin-top':"-" + parseInt(top)/2 +'px', 'margin-left':"-" + parseInt(left)/2 +'px'});
                    });
                }
            });

        },
        template:'<div style="position: absolute;top: 50%; left: 50%;border: 1px solid gainsboro;border-radius: 5px;background: #fff;z-index: 6" id="promp">\
        <div ng-click="vm.closePromp()"><span class="glyphicon glyphicon-remove" style="position: absolute; right: 10px;top: 10px;"></span></div>\
        <div style="width: 100%;height: 40px;background: gainsboro;border-bottom: 1px solid gainsboro;"></div>\
                 <div id="clude" class="row" ng-transclude>\
                 </div>\
                 </div>'
    }
});
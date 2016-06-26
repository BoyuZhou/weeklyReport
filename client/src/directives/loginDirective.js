/**
 * Created by guzi on 2016/6/23.
 */
mainModule.directive('login', function(){
    return {
        restrict: 'A',
        templateUrl: 'template/login.html',
        controller: 'loginController',
        controllerAs: 'vm',
        link: function(scope, iElement, iAttrs){

        }
    }
});


mainModule.directive('bfFieldError', function ($compile) {
   return {
       restrict: 'A',
       require: 'ngModel',
       link: function(scope, element, attrs, ngModel) {
           var subScope = scope.$new(true);

           subScope.hasError = function () {
               return ngModel.$invalid && ngModel.$dirty;
           };

           subScope.errors = function () {
               return ngModel.$error;
           };

           var html = $compile('<ul ng-if="hasError()">{{ errors() }}</ul>')(subScope);

           element.after(html);

       }
   }
});


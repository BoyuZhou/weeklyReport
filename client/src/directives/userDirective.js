mainModule.directive('addUser', function ($compile, userFactory, $rootScope, $state) {
   return {
       restrict:'A',
       controller: 'userController',
       link:function (scope, element, attrs) {
           element.click(function(){
               console.log(111);
               //$('#clude').attr('ng-include', 'view/promp/details.html');
               $state.go('home.userpage.add');
               $rootScope.promp = true;

           });

       }
   }
});
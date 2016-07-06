

mainModule.directive('changeState', function () {
   return {
       restrict: 'A',
       link: function (scope, element, attrs) {
           element.click(function () {
               if(!attrs.changeState)return;
               $('.state').find('div').css('background', '#fff');
              $(this).find('div').css('background', 'gainsboro');
           });
           element.mouseover(function() {
                $(this).find('.control').css('display', 'inline-block');
           });
           element.mouseout(function() {
               $(this).find('.control').css('display', 'none');
           });
       }
   }
});
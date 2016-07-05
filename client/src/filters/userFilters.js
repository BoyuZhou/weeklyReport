mainModule.filter('context', function() {
   return function (input, id) {
       $('#' + id).attr("value", input);
   }
});
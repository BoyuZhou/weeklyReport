mainModule.factory('data', function dataFactory($http, $state) {
    var login = function(data){
        $http({
            url: '/api/access_token',
            method: 'GET'
        }).success(function () {
            var page = $location.$$path;
            $state.go(page.substring(1));
        }).error(function () {
            $state.go('login')
        });
    };

    return function(){
        console.dir($http);


    }
});
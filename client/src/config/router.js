mainModule.config(function($stateProvider, $urlRouterProvider){

    $stateProvider.state(
        'login',
        {
            url: '/login',
            templateUrl: 'template/login.html',
            controller: 'loginController as vm'
        }
    )
        .state('home', {
        url: '/home',
        template: 'template/home.html',
        abstract: true
    })
        .state('home.user', {
        url: '/user',
        templateUrl: 'template/user.html',
        controller: 'userController as vm'
    })
        .state('notFound', {
        url: '/notFound ',
        templateUrl: 'template/notFoound.html'
    });

    $urlRouterProvider.otherwise('/login');
});
mainModule.config(function($stateProvider, $urlRouterProvider){

    $stateProvider.state(
        'login',
        {
            url: '/login',
            templateUrl: 'view/login.html',
            controller: 'loginController as vm'
        })
        .state('home', {
            url: '/home',
            templateUrl: 'view/home.html',
            controller: 'homeController as vm',
            abstract: true
        })
        .state('home.user', {
            url: '/user',
            templateUrl: 'view/user.html',
            controller: 'userController as vm'
        })
        .state('home.limit', {
            url: '/limit',
            templateUrl: 'view/limit.html',
            controller: 'limitController as vm'
        })
        .state('home.personaldata', {
            url: '/personaldata',
            templateUrl: 'view/personaldata.html'
        })
        .state('home.personal', {
            url: '/personal',
            templateUrl: 'view/personal.html'
        })
        .state('home.workbench', {
            url: '/workbench',
            templateUrl: 'view/workbench.html',
            controller: 'taskController as vm'
        })
        .state('home.teamDay', {
            url: '/teamDay',
            templateUrl: 'view/teamDay.html',
            controller: 'taskController as vm'
        })
        .state('home.teamWeek', {
            url: '/teamWeek',
            templateUrl: 'view/teamWeek.html',
            controller: 'taskController as vm'
        })
        .state('notFound', {
        url: '/notFound ',
        templateUrl: 'view/notFound.html'
    });

    $urlRouterProvider.otherwise('/login');
});
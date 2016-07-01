mainModule.config(function($stateProvider, $urlRouterProvider){

    $stateProvider.state(
        'login',
        {
            url: '/login',
            templateUrl: 'view/login.html',
            controller: 'loginController as vm'
        }
    )
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
        .state('home.personage', {
            url: '/personage',
            templateUrl: 'view/personage.html'
        })
        .state('home.team', {
            url: '/team',
            templateUrl: 'view/team.html'
        })
        .state('home.limit', {
            url: '/limit',
            templateUrl: 'view/limit.html'
        })
        .state('home.department', {
            url: '/department',
            templateUrl: 'view/department.html'
        })
        .state('home.querydailypaper', {
            url: '/querydailypaper',
            templateUrl: 'view/querydailypaper.html'
        })
        .state('home.dailypaper', {
            url: '/dailypaper',
            templateUrl: 'view/dailypaper.html'
        })
        .state('home.task', {
            url: '/task',
            templateUrl: 'view/task.html'
        })
        .state('home.writetask', {
            url: '/writetask',
            templateUrl: 'view/writetask.html',
            controller: 'taskController as vm'
        })
        .state('home.personaldata', {
            url: '/personaldata',
            templateUrl: 'view/personaldata.html'
        })
        .state('home.adduser', {
            url: '/adduser',
            templateUrl: 'view/addUser.html'
        })
        .state('home.adddepartment', {
            url: '/adddepartment',
            templateUrl: 'view/addDepartment.html'
        }).state('home.addteam', {
            url: '/addteam',
            templateUrl: 'view/addTeam.html'
        })

        .state('notFound', {
        url: '/notFound ',
        templateUrl: 'view/notFound.html'
    });

    $urlRouterProvider.otherwise('/login');
});
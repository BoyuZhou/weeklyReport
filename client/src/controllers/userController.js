mainModule.controller('userController', ['$scope', 'userFactory', function($scope, userFactory){
    var vm = this;

    vm.users = userFactory.users;

    vm.addUser = function (user) {

      userFactory.addUser(user);
        console.log($scope.$parent);
    };
    vm.structure = {
        root: '小车匠',
        departments: [
             {
                name: '技术部',
                teams: [ '前端团队', 'java团队', '测试团队'

                ]

                },
            {
                name: '策划部',
                teams:['策划团队', '销售团队']
            }

        ]
    };


    //vm.user = {
    //    title: '用户资料',
    //    thead: [],
    //    tbody: [
    //        ["姓名", '周博宇'],
    //        ["用户名", '周博宇'],
    //        ["性别", '男'],
    //        ["邮箱", 'zby@163.com'],
    //        ["职位", '前端开发'],
    //        ["权限", 'xxxx'],
    //        ["电话", '11111111111']
    //
    //    ],
    //    control: false
    //}

}]);
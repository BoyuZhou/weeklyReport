mainModule.controller('userController', ['$scope', 'userService', 'treeService', '$state', function($scope, userService, treeService, $state){
    var vm = this;

    vm.promp = false;

    vm.users = userService.users;

    vm.addUser = function () {
        console.log(11);
        $state.go('home.userpage.add');
       vm.promp = true;

      //userFactory.addUser(user);
      //  console.log($scope.$parent);
    };

    vm.structure = treeService.tree;



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
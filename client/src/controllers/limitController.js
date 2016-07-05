mainModule.controller('limitController', ['$scope', function($scope) {
    var vm = this;
    vm.data = {
        title: '权限分组表',
        thead: ['编号', '权限名称', '权限描述', "", '操作'],
        tbody: [
            ['1', '管理员', '管理员',""],
            ['2', '管理员', '管理员',""],
            ['3', '管理员', '管理员',""],
            ['4', '管理员', '管理员',""],
            ['5', '管理员', '管理员',""]
        ],
        control: true,
        get: true,
        change: true,
        group: true,
        limit: true,
        stop: true,
        classify: 'limitControl'
    };
}]);
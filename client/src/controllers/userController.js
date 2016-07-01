mainModule.controller('userController', ['$scope', function($scope){
    var vm = this;



    var setting = {
        view: {
            dblClickExpand: false,
            showLine: true
        },
        data: {
            simpleData: {
                enable: true
            }
        },
        callback: {
            onClick: onClick
        }
    };

    var zNodes =[
        { id:1, pId:0, name:"技术部", icon: 'images/1_close.png', open:true},
        { id:14, pId:1, name:"姚哥", icon: 'images/user.png', open:true},
        { id:11, pId:1, name:"前端", icon: 'images/1_close.png', open:true},
        { id:111, pId:11, name:"郝立强", icon: 'images/user.png'},
        { id:112, pId:11, name:"前端人员", icon: 'images/group.png', open:true},
        { id:1121, pId:112, name:"谢国亮", icon: 'images/user.png'},
        { id:1122, pId:112, name:"黄敏", icon: 'images/user.png'},
        { id:12, pId:1, name:"后台", icon: 'images/1_close.png', open:true},
        { id:121, pId:12, name:"董汉生", icon: 'images/user.png'},
        { id:122, pId:12, name:"后台人员", icon: 'images/group.png', open:true},
        { id:1221, pId:122, name:"袁智康", icon: 'images/user.png'},
        { id:1222, pId:122, name:"新来的", icon: 'images/user.png'},
        { id:13, pId:1, name:"测试", icon: 'images/1_close.png', open:true},
        { id:131, pId:13, name:"赵滨", icon: 'images/user.png'},
        { id:132, pId:13, name:"测试人员", icon: 'images/group.png', open:true},
        { id:1321, pId:132, name:"称大陆", icon: 'images/user.png'},
        { id:1322, pId:132, name:"小胖", icon: 'images/user.png'}
    ];

    function onClick(e,treeId, treeNode) {
        var zTree = $.fn.zTree.getZTreeObj("treeDemo");
        zTree.expandNode(treeNode);
    }

    $(document).ready(function(){
        $.fn.zTree.init($("#treeDemo"), setting, zNodes);
    });

    vm.user = {
        title: '用户资料',
        thead: [],
        tbody: [
            ["姓名", '周博宇'],
            ["用户名", '周博宇'],
            ["性别", '男'],
            ["邮箱", 'zby@163.com'],
            ["职位", '前端开发'],
            ["权限", 'xxxx'],
            ["电话", '11111111111']

        ],
        control: false
    }

}]);
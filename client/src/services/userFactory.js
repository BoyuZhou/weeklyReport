mainModule.factory('userFactory', function(){
    //获取所有用户
    var getAllUsers = function () {

        return {
            label: '选择用户',
            select: ['周博宇', 'zhouboyu', '周博宇', 'zhouboyu', '周博宇', 'zhouboyu']
        }
    };
    //添加用户
    var addUser = function () {

    };

    var users = {
        title: '成员列表',
            thead: ['ID', '姓名', '用户名', '邮箱', '操作'],
        tbody: [
        ['001', '程大陆', '小胖', '13513513511'],
        ['002', '程大陆', '小胖', '13513513511'],
        ['003', '程大陆', '小胖', '13513513511'],
        ['004', '程大陆', '小胖', '13513513511'],
        ['005', '程大陆', '小胖', '13513513511'],
        ['006', '程大陆', '小胖', '13513513511'],
        ['007', '程大陆', '小胖', '13513513511']
    ],
        control: true,
        get: true,
        change: true,
        stop: true,
        classify: 'userControl'
    };

    var department =[
        { id:1, pId:0, name:"技术部", icon: 'images/1_close.png', open:true},
        { id:11, pId:1, name:"前端", icon: 'images/1_close.png', open:true},
        { id:111, pId:11, name:"前端-1", icon: 'images/group.png'},
        { id:112, pId:11, name:"前端-2", icon: 'images/group.png'},
        { id:12, pId:1, name:"后台", icon: 'images/1_close.png', open:true},
        { id:121, pId:12, name:"后台-1", icon: 'images/group.png'},
        { id:122, pId:12, name:"后台-2", icon: 'images/group.png', open:true},
        { id:13, pId:1, name:"测试", icon: 'images/1_close.png', open:true},
        { id:131, pId:13, name:"测试-1", icon: 'images/group.png'},
        { id:132, pId:13, name:"测试-2", icon: 'images/group.png', open:true}
    ];

    var team =[
        { id:1, pId:0, name:"团队",icon: 'images/1_open.png', open:true, drag: false},
        { id:11, pId:1, name:"团队 1",icon: 'images/1_open.png', open:true, drag: false},
        { id:111, pId:11, name:"子团队 1-1", icon: 'images/file/diy/8.png', dropRoot: false, dropInner: false},
        { id:112, pId:11, name:"子团队 1-2", icon: 'images/file/diy/8.png', dropRoot: false, dropInner: false},
        { id:12, pId:1, name:"团队 2",icon: 'images/1_open.png', open:true, drag: false},
        { id:121, pId:12, name:"子团队 2-1", icon: 'images/file/diy/8.png', dropRoot: false, dropInner: false},
        { id:122, pId:12, name:"子团队 2-2", icon: 'images/file/diy/8.png', dropRoot: false, dropInner: false},
        { id:13, pId:1, name:"团队 3", icon: 'images/1_open.png', open:true, drag: false},
        { id:131, pId:13, name:"子团队 3-1", icon: 'images/file/diy/8.png', dropRoot: false, dropInner: false},
        { id:132, pId:13, name:"子团队 3-2", icon: 'images/file/diy/8.png', dropRoot: false, dropInner: false}
    ];

    return {
        getAllUsers: getAllUsers,
        addUser: addUser,
        department: department,
        team: team,
        users: users
    }
});
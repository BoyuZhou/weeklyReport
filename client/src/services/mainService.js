mainModule.service('mainService', function() {
   this.promp = false;
    this.userform = {
        form1 : {
            label: '用户名',
            type: 'text'
        },
        form2 : {
            label: '姓名',
            type: 'text'
        },
        form3 : {
            label: '邮箱',
            type: 'text'
        },
        form4 : {
            label: '电话',
            type: 'text'
        },
        form5 : {
            label: '职位',
            type: 'text'
        }
    };





    this.limitControl = {

        userInfo : {
            tbody: [
                ['ID', '001'],
                ['权限名称', '管理员'],
                ['权限描述', '管理员'],
                ['权限组成', '删除、更改、编写'],
                ['组内成员', '周博宇、博宇周、宇周博']
            ],
            control: false
        },
        userInfoForm : {
            form1: {
                id: 'limitname',
                label: '权限名称',
                type: 'text',
                context: '管理员'
            },
            form2: {
                id: 'describtion',
                label: '权限描述',
                type: 'text',
                context: '管理员'
            },
            form3: {
                id: 'compose',
                label: '权限组成',
                type: 'text',
                context: '删除、更改、编写'
            },
            form4: {
                id: 'member',
                label: '组内成员',
                type: 'text',
                context: '周博宇、博宇周、宇周博'
            }
        },

        group : {
        title: '组内成员',
        users: ['周博宇', 'hahaha', '周博宇', 'hahaha', '周博宇', 'hahaha', '周博宇', 'hahaha', '周博宇', 'hahaha']
    },
        limit : {
            title: '组内权限',
            options: ['添加', '删除', '修改', '上报', '更新', '减少']
        },
    //查看方法
    getInfo : '<div xcj-table data="userInfo"></div>',

    //查看权限信息
    getLimit : '<div class="col-lg-10 col-lg-offset-1"><div class="row"><div class="col-lg-4 col-lg-offset-4" style="border-bottom: 1px solid gainsboro">{{ limit.title }}</div></div><div class="row"><div class="col-lg-3" ng-repeat="item in limit.options track by $index">{{ item }}</div></div></div>',

    //查看成员
   getGroup : '<div class="col-lg-10 col-lg-offset-1"><div class="row"><div class="col-lg-4 col-lg-offset-4" style="border-bottom: 1px solid gainsboro">{{ group.title }}</div></div><div class="row"><div class="col-lg-3" ng-repeat="item in group.users track by $index">{{ item }}</div></div></div>',

    //修改方法
    changeInfo : '<div class="col-lg-10 col-lg-offset-1"><div xcj-form data="infoForm"></div></div>'
    };

    this.userControl = {
        user : {
        label: '选择用户',
        select:['周博宇', 'zhouboyu','周博宇', 'zhouboyu','周博宇', 'zhouboyu']
    },
    userInfo : {
        tbody: [
            ['用户名', 'zhouboyu'],
            ['真实姓名', '周博宇'],
            ['所属部门', '平台部'],
            ['职位', '前端开发'],
            ['权限', '研发'],
            ['邮箱', '356607913125@xcj.com']
        ],
        control: false
    },
    userInfoForm : {
        form1: {
            id: 'username',
            label: '用户名',
            type: 'text',
            context: 'zhouboyu'
        },
        form2: {
            id: 'realname',
            label: '姓名',
            type: 'text',
            context: '周博宇'
        }
    },

        getInfo :  html = '<div xcj-table data="userInfo"></div>',

        changeInfo : '<div class="col-lg-10 col-lg-offset-1"><div xcj-form data="infoForm"></div></div>'

        }

});
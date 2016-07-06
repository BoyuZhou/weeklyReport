mainModule.service('limitService', function (mainService) {
     this.data = {
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
         stop: true
     };
    this.data.stop = function (e) {
        if($(e).parent().parent().hasClass('danger')){
            $(e).parent().parent().removeClass('danger');
        }else{
            $(e).parent().parent().addClass('danger');
        }
    };
    this.data.changeInfo = function () {
        mainService.prompSrc = 'view/promp/changeLimitInfo.html';
        mainService.changeLimitInfo = {
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
            }
        };
        mainService.promp = true;
    };
    this.data.viewInfo = function () {
        mainService.prompSrc = 'view/promp/limitInfo.html';
        mainService.limitInfo = {
            tbody: [
                ['ID', '001'],
                ['权限名称', '管理员'],
                ['权限描述', '管理员']
            ],
            control: false
        };
        mainService.promp = true;
    };
    this.data.addUser = function () {
        mainService.prompSrc = 'view/promp/addLimit.html';

        mainService.promp = true;
    };
    this.data.getGroup = function () {
        mainService.prompSrc = 'view/promp/limitGroup.html';

        mainService.limitGroup = {
            tree : {
                root: {
                    name: '小车匠',
                    state: true
                },
                departments: [
                    {
                        name: '技术部',
                        teams: [ '前端团队', 'java团队', '测试团队'],
                        state: true
                    },
                    {
                        name: '策划部',
                        teams:['策划团队', '销售团队'],
                        state: true
                    }

                ]
            },
           users: ['周博宇', 'zhouboyu', '周博宇', 'zhouboyu', '周博宇', 'zhouboyu','周博宇', 'zhouboyu','周博宇', 'zhouboyu']
        };
        $('.promp').css({'max-width':'800px', marginLeft: '-400px'});
        mainService.promp = true;
    };
    this.data.getLimit = function () {
        mainService.prompSrc = 'view/promp/limit.html';
        mainService.limit = {
          title: '权限表',
            thead: ['功能', '模块'],
            tbody:[
                { name:'首页',content:['首页'] },
                {name:'用户管理', content:['查看', '增加部门', '增加团队', '禁用部门', '禁用团队', '修改部门名称', '修改团队名称', '增加用户', '修改用户', '禁用用户']},
            {name:'权限管理', content:['查看', '增加角色', '添加角色用户', '添加角色权限']},
        {name:'我的工作台', content:['查看团队日报', '查看团队周报', '修改团队日报', '修改团队周报', '查看个人日报', '编写个人日报', '修改个人日报']}
            ]
        };
        $('.promp').css({'max-width':'800px', marginLeft: '-400px'});
        mainService.promp = true;
    };

});
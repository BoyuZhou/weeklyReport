mainModule.service('userService', function(mainService) {
    this.users = {
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
    this.users.addUser = function () {
        mainService.promp = true;
        mainService.prompSrc = 'view/promp/details.html'
    };

    this.users.viewInfo = function () {
        mainService.promp = true;
        mainService.userInfo = {
            tbody: [
                ['用户名', 'zhouboyu'],
                ['真实姓名', '周博宇'],
                ['所属部门', '平台部'],
                ['职位', '前端开发'],
                ['权限', '研发'],
                ['邮箱', '356607913125@xcj.com']
            ],
            control: false
        };
        mainService.prompSrc = 'view/promp/userInfo.html'

    };
    this.users.stop = function(e){
        if($(e).parent().parent().hasClass('danger')){
            $(e).parent().parent().removeClass('danger');
        }else{
            $(e).parent().parent().addClass('danger');
        }
    };
    this.users.changeInfo = function(){
        mainService.promp = true;
        mainService.changeInfo = {
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
        };
        mainService.prompSrc = 'view/promp/changeInfo.html'
    }


});
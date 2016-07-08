mainModule.service('mainService', function() {
    //弹窗是否显示
    this.promp = false;
    //弹窗为修改团队任务详情时绑定的数据
    this.modifterData = "";
    //弹窗绑定的视图url
    this.prompSrc = "";
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

});
mainModule.service('mainService', function() {
    this.promp = false;
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
mainModule.service('treeService', function(){
    //后台获取数据
    this.getData = function(){

    };
    //数据封装
    this.tree = {
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

    };
    this.tree.stateChange = function (item, target) {
        if($(target).parent().attr('change-state') == 'true'){
            item.state = !item.state;
        }
    };

    this.tree.changeName = function (target) {
        $(target).parent().parent().find('div').attr('contenteditable', 'true').focus().css({'border':'1px solid #ddd','background':'#eee'}).bind('blur', function(){
            $(this).css({'border':'1px solid #fff','background':'#fff'}).attr('contenteditable', 'false');
        }).keydown(function(){
               //$(this).html("");
            });


    };

    this.tree.addNode = function (node) {
       var num = node.length;
        console.log(typeof node[0]);
        if(typeof node[0] == 'object'){
            node[num] = { name: '未命名', teams: [], state: true};
        }else{
            node[num] = '未命名';
        }
    };

    this.tree.forbidden = function(target) {
        if($(target).hasClass('fa-refresh')){
            $(target).parent().parent().attr('change-state', 'true').find('.icon').removeClass('forbidden');
            $(target).parent().parent().parent().find('ul').show();
            $(target).removeClass('fa-refresh').addClass('fa-ban').attr('title', '禁用').siblings().show();
        }else{
            $(target).parent().parent().attr('change-state', 'false').find('.icon').addClass('forbidden');
            $(target).parent().parent().parent().find('ul').hide();
            $(target).removeClass('fa-ban').addClass('fa-refresh').attr('title', '恢复').siblings().hide();
        }

    };




});
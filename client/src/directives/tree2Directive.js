mainModule.directive('xcjTree', function (userFactory) {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            var setting = {
                view: {
                    addHoverDom: addHoverDom,
                    removeHoverDom: removeHoverDom,
                    selectedMulti: false
                },
                edit: {
                    enable: true,
                    editNameSelectAll: true
                    //showRemoveBtn: showRemoveBtn,
                    //showRenameBtn: showRenameBtn
                },
                data: {
                    simpleData: {
                        enable: true
                    }
                },
                callback: {
                    beforeDrag: beforeDrag,
                    beforeEditName: beforeEditName,
                    beforeRemove: beforeRemove,
                    beforeRename: beforeRename

                }
            };
//childOuter 子节点是否能移出
//dropInner 是否可以被移入节点
//dropRoot 是否可以成为根节点
//childOrder
            var id = attrs.id;
            var data = attrs.xcjTree;

            var zNodes = userFactory[data];

            var log, className = "dark";
            function beforeDrag(treeId, treeNodes) {
                return false;
            }
            function beforeEditName(treeId, treeNode) {
                className = (className === "dark" ? "":"dark");

                var zTree = $.fn.zTree.getZTreeObj(id);
                zTree.selectNode(treeNode);

            }
            function beforeRemove(treeId, treeNode) {
                className = (className === "dark" ? "":"dark");

                var zTree = $.fn.zTree.getZTreeObj(id);
                zTree.selectNode(treeNode);
            }

            function beforeRename(treeId, treeNode, newName, isCancel) {
                className = (className === "dark" ? "":"dark");

                if (newName.length == 0) {
                    //alert("节点名称不能为空.");
                    var zTree = $.fn.zTree.getZTreeObj(id);
                    setTimeout(function(){zTree.editName(treeNode)}, 10);
                    return false;
                }
                return true;
            }

            //function showRemoveBtn(treeId, treeNode) {
            //    return !treeNode.isFirstNode;
            //}
            //function showRenameBtn(treeId, treeNode) {
            //    return !treeNode.isLastNode;
            //}


            var newCount = 1;
            function addHoverDom(treeId, treeNode) {
                var sObj = $("#" + treeNode.tId + "_span");
                if (treeNode.editNameFlag || $("#addBtn_"+treeNode.tId).length>0) return;
                var addStr = "<span class='button add' id='addBtn_" + treeNode.tId + "' title='增加子项目' onfocus='this.blur();'></span>";
                sObj.after(addStr);
                var btn = $("#addBtn_"+treeNode.tId);
                if (btn) btn.bind("click", function(){
                    var zTree = $.fn.zTree.getZTreeObj(id);
                    console.log(treeId, treeNode);
                    zTree.addNodes(treeNode, {id:(100 + newCount), pId:treeNode.id, icon: "images/file/diy/8.png", name:"new node" + (newCount++)});
                    return false;
                });
            };
            function removeHoverDom(treeId, treeNode) {
                $("#addBtn_"+treeNode.tId).unbind().remove();
            };
            function selectAll() {
                var zTree = $.fn.zTree.getZTreeObj(id);
                zTree.setting.edit.editNameSelectAll =  $("#selectAll").attr("checked");
            }

            $(document).ready(function(){
                $.fn.zTree.init($("#" + id), setting, zNodes);
                $("#selectAll").bind("click", selectAll);
            });

        }
    }
});


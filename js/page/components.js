/**
 * Created by Administrator on 2017/4/30.
 */

function readHTML(path) {
    return $.ajax({
        async: false,
        url: path,
        success: function (result) {
            return result;
        }
    }).responseText;
}

// 首页
avalon.component('ms-home',{
    template:readHTML('components/home.html'),
    defaults:{
        content: "",
        onReady:function(){
            $(function() {
                $('#slider').vmcSlider({
                    width: 750,
                    height: 350,
                    gridCol: 10,
                    gridRow: 5,
                    gridVertical: 20,
                    gridHorizontal: 10,
                    autoPlay: true,
                    ascending: true,
                    effects: [
                        'fade', 'fadeLeft'
                    ],
                    ie6Tidy: false,
                    random: false,
                    duration: 2000,
                    speed: 900
                });
            });
            $('#pageToolbar').Paging({pagesize:10,count:85,toolbar:true});
            $("#header_nav li a[href='#!/home']").parent("li").siblings().removeClass('current');
            $("#header_nav a[href='#!/home']").parent("li").addClass('current');
        }
    }
});
// 专题 页面
avalon.component('ms-special',{
    template:readHTML('components/special.html'),
    defaults:{
        content: "",
        onReady:function(){
            $('#slider').vmcSlider({
                width: 1170,
                height: 140,
                gridCol: 10,
                gridRow: 5,
                gridVertical: 20,
                gridHorizontal: 10,
                autoPlay: true,
                ascending: true,
                effects: [
                    'fade', 'fadeLeft', 'fadeRight', 'fadeTop', 'fadeBottom', 'fadeTopLeft', 'fadeBottomRight',
                    'blindsLeft', 'blindsRight', 'blindsTop', 'blindsBottom', 'blindsTopLeft', 'blindsBottomRight',
                    'curtainLeft', 'curtainRight', 'interlaceLeft', 'interlaceRight', 'mosaic', 'bomb', 'fumes'
                ],
                ie6Tidy: false,
                random: false,
                duration: 2000,
                speed: 900
            });
            $("#header_nav a[href='#!/special']").parent("li").siblings().removeClass('current');
            $("#header_nav a[href='#!/special']").parent("li").addClass('current');
        }
    }
});
// 排行榜 页面
avalon.component('ms-rankList',{
    template:readHTML('components/rankList.html'),
    defaults:{
        content: "",
        onReady:function(){
            $('#slider').vmcSlider({
                width: 1170,
                height: 140,
                gridCol: 10,
                gridRow: 5,
                gridVertical: 20,
                gridHorizontal: 10,
                autoPlay: true,
                ascending: true,
                effects: [
                    'fade', 'fadeLeft', 'fadeRight', 'fadeTop', 'fadeBottom', 'fadeTopLeft', 'fadeBottomRight',
                    'blindsLeft', 'blindsRight', 'blindsTop', 'blindsBottom', 'blindsTopLeft', 'blindsBottomRight',
                    'curtainLeft', 'curtainRight', 'interlaceLeft', 'interlaceRight', 'mosaic', 'bomb', 'fumes'
                ],
                ie6Tidy: false,
                random: false,
                duration: 2000,
                speed: 900
            });
            $("#header_nav a[href='#!/rankList']").parent("li").siblings().removeClass('current');
            $("#header_nav a[href='#!/rankList']").parent("li").addClass('current');
        }
    }
});

// kindeditor 编辑器 兼容性封装
function kedit(keid,config){
    var keditor =  KindEditor.create(
        '#' + keid,config);
}
// 论坛
avalon.component('ms-forum',{
    template:readHTML('components/forum.html'),
    defaults:{
        content: "",
        onReady:function(){
            $('#pageTool').Paging({pagesize:10,count:100,callback:function(page,size,count){
                console.log(arguments)
                alert('当前第 ' +page +'页,每页 '+size+'条,总页数：'+count+'页')
            }});
            $("#header_nav a[href='#!/forum']").parent("li").siblings().removeClass('current');
            $("#header_nav a[href='#!/forum']").parent("li").addClass('current');

            var config ={
                filterMode : false, //不会过滤HTML代码
                resizeType : 0,
                imageUploadJson : '/kindeditor-4.1.7/jsp/upload_json.jsp',
                fileManagerJson : '/kindeditor-4.1.7/jsp/file_manager_json.jsp',
                allowUpload : true,
                allowPreviewEmoticons : true,
                allowFileManager : true,
                afterCreate : function() {
                    var self = this;

                    KindEditor.ctrl(document, 13, function() {
                        self.sync();
                        document.forms['example'].submit();
                    });

                    KindEditor.ctrl(self.edit.doc, 13, function() {
                        self.sync();
                        document.forms['example'].submit();
                    });
                },
                items : [
                    'forecolor', 'bold', 'italic', 'underline',
                    'removeformat','code', '|', 'insertorderedlist', 'insertunorderedlist','table',
                    '|','justifyleft','justifycenter','justifyright',
                    'plainpaste', '|', 'emoticons', 'image', 'link','undo','redo'],
                afterBlur: function(){this.sync();},//和DWZ 的 Ajax onsubmit 冲突,提交表单时 编辑器失去焦点执行填充内容
                newlineTag : "br"
            };
            kedit("commit",config);
        }
    }
});

// 会员墙
avalon.component('ms-member',{
    template:readHTML('components/member.html'),
    defaults:{
        content: "",
        onReady:function(){
            $('#slider').vmcSlider({
                width: 1170,
                height: 140,
                gridCol: 10,
                gridRow: 5,
                gridVertical: 20,
                gridHorizontal: 10,
                autoPlay: true,
                ascending: true,
                effects: [
                    'fade', 'fadeLeft', 'fadeRight', 'fadeTop', 'fadeBottom', 'fadeTopLeft', 'fadeBottomRight',
                    'blindsLeft', 'blindsRight', 'blindsTop', 'blindsBottom', 'blindsTopLeft', 'blindsBottomRight',
                    'curtainLeft', 'curtainRight', 'interlaceLeft', 'interlaceRight', 'mosaic', 'bomb', 'fumes'
                ],
                ie6Tidy: false,
                random: false,
                duration: 2000,
                speed: 900
            });
            $("#header_nav a[href='#!/member']").parent("li").siblings().removeClass('current');
            $("#header_nav a[href='#!/member']").parent("li").addClass('current');
        }
    }
});

// 个人博客管理中心
avalon.component('ms-myblog',{
    template:readHTML('components/myblog.html'),
    defaults:{
        content: "",
        submenu: 'userInfo',
        onReady:function(){
            $("#header_nav a[href='#!/myblog']").parent("li").siblings().removeClass('current');
            $("#header_nav a[href='#!/myblog']").parent("li").addClass('current');
        },
        toggleTab:function(e){
            e.preventDefault();
            var target = e.target;
            if(target.nodeName=='I'){
                this.submenu =target.parent('a').getAttribute('data-tab');
            }else if(target.nodeName=='A'){
                this.submenu =target.getAttribute('data-tab');
            }
        }
    }
});

// 页脚
avalon.component('ms-footer',{
    template:readHTML('components/footer.html'),
    defaults:{
        content: ""
    }
});

// 页面侧边栏
avalon.component('ms-aside',{
    template:readHTML('components/widget/asideTool.html'),
    defaults:{
        content: "",
        toggle:false,
        openMusicPlayer: function(e){
            e.preventDefault();
            if(this.toggle){
                $('#Mplayer').css('opacity','0');
                $('#Mplayer').css('left','-490px');
                this.toggle=false;
            }else{
                $('#Mplayer').css('left','50px');
                $('#Mplayer').css('opacity','1');
                this.toggle=true;
            }
        },
        toggleNav:function(e){
            var target = e.target;
        },
        onReady:function(){
            var ap4 = new APlayer({
                element: document.getElementById('player4'),
                narrow: false,
                autoplay: false,
                showlrc: false,
                mutex: false,
                theme: '#ad7a86',
                mode: 'random',
                music: [
                    {
                        title: 'Seve',
                        author: 'Tez Cadey',
                        url: 'http://www.tingge123.com/mp3/2016-01-11/1452487230.mp3',
                        pic: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000004NI9pl30Wyz4.jpg?max_age=2592000'
                    },
                    {
                        title: 'See You Again',
                        author: 'Wiz Khalifa',
                        url: 'http://sc1.111ttt.com/2015/1/04/25/97251325272.mp3',
                        pic: 'https://y.gtimg.cn/music/photo_new/T002R300x300M0000039Pp2W372JsM.jpg?max_age=2592000'
                    },
                    {
                        title: 'Sunny day',
                        author: 'Joy Williams',
                        url: 'http://sc.111ttt.com/up/mp3/48786/FBD4A7E7CA866AECEFA53BAE9B1B23EF.mp3',
                        pic: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000001G2kl31ivkpb.jpg?max_age=2592000'
                    },
                    {
                        title: 'See You Again',
                        author: 'Wiz Khalifa',
                        url: 'http://sc1.111ttt.com/2015/1/04/25/97251325272.mp3',
                        pic: 'https://y.gtimg.cn/music/photo_new/T002R300x300M0000039Pp2W372JsM.jpg?max_age=2592000'
                    },
                    {
                        title: 'See You Again',
                        author: 'Wiz Khalifa',
                        url: 'http://sc1.111ttt.com/2015/1/04/25/97251325272.mp3',
                        pic: 'https://y.gtimg.cn/music/photo_new/T002R300x300M0000039Pp2W372JsM.jpg?max_age=2592000'
                    }
                ]
            });
        }
    }
});

// 关于我们
avalon.component('ms-about',{
    template:readHTML('components/widget/about.html'),
    defaults:{
        content: ""
    },
    onReady:function(){
        $("#header_nav a[href='#!/myblog']").parent("li").siblings().removeClass('current');
        //$("#header_nav a[href='#!/myblog']").parent("li").addClass('current');
    }
});
// 文章内容
avalon.component('ms-article',{
    template:readHTML('components/article.html'),
    defaults:{
        content: "",
        onReady:function(){
            $("#header_nav li a[href='#!/home']").parent("li").siblings().removeClass('current');
            $("#header_nav a[href='#!/home']").parent("li").addClass('current');
        }
    }

});
// 论坛内容
avalon.component('ms-content',{
    template:readHTML('components/content.html'),
    defaults:{
        content: "",
        onReady:function(){
            $("#header_nav a[href='#!/forum']").parent("li").siblings().removeClass('current');
            $("#header_nav a[href='#!/forum']").parent("li").addClass('current');
            var config={
                filterMode : false, //不会过滤HTML代码
                resizeType : 0,
                imageUploadJson : '/kindeditor-4.1.7/jsp/upload_json.jsp',
                fileManagerJson : '/kindeditor-4.1.7/jsp/file_manager_json.jsp',
                allowUpload : true,
                allowPreviewEmoticons : true,
                allowFileManager : true,
                afterCreate : function() {
                    var self = this;
                    if(document){
                        KindEditor.ctrl(document, 13, function() {
                            self.sync();
                            document.forms['example'].submit();
                        });

                        KindEditor.ctrl(self.edit.doc, 13, function() {
                            self.sync();
                            document.forms['example'].submit();
                        });
                    }
                },
                items : [
                    'forecolor', 'bold', 'italic', 'underline',
                    'removeformat','code', '|', 'insertorderedlist', 'insertunorderedlist',
                    '|', 'emoticons', 'link','undo','redo'],
                afterBlur: function(){this.sync();},//和DWZ 的 Ajax onsubmit 冲突,提交表单时 编辑器失去焦点执行填充内容
                newlineTag : "br"
            };
            kedit('comment',config);
        }
    }
});

// 用户信息
avalon.component('ms-userinfo',{
    template:readHTML('components/widget/userInfo.html'),
    defaults:{
        content: "",
        onReady:function(){
            //$("#header_nav a[href='#!/myblog']").parent("li").siblings().removeClass('current');
            //$("#header_nav a[href='#!/myblog']").parent("li").addClass('current');
        }
    }
});
// 文章管理
avalon.component('ms-artManagement',{
    template:readHTML('components/widget/artManagement.html'),
    defaults:{
        content: "",
        onReady:function(){
            //$("#header_nav a[href='#!/myblog']").parent("li").siblings().removeClass('current');
            //$("#header_nav a[href='#!/myblog']").parent("li").addClass('current');
        }
    }
});
// 分类管理
avalon.component('ms-classicManagement',{
    template:readHTML('components/widget/classicManagement.html'),
    defaults:{
        content: "",
        onReady:function(){
            //$("#header_nav a[href='#!/myblog']").parent("li").siblings().removeClass('current');
            //$("#header_nav a[href='#!/myblog']").parent("li").addClass('current');
        }
    }
});
// 评论管理
avalon.component('ms-commentManagement',{
    template:readHTML('components/widget/commentManagement.html'),
    defaults:{
        content: "",
        onReady:function(){
            //$("#header_nav a[href='#!/myblog']").parent("li").siblings().removeClass('current');
            //$("#header_nav a[href='#!/myblog']").parent("li").addClass('current');
        }
    }
});
// 草稿箱
avalon.component('ms-draft',{
    template:readHTML('components/widget/draft.html'),
    defaults:{
        content: "",
        onReady:function(){
            //$("#header_nav a[href='#!/myblog']").parent("li").siblings().removeClass('current');
            //$("#header_nav a[href='#!/myblog']").parent("li").addClass('current');
        }
    }
});
// 垃圾箱
avalon.component('ms-recycle',{
    template:readHTML('components/widget/recycle.html'),
    defaults:{
        content: "",
        onReady:function(){
            //$("#header_nav a[href='#!/myblog']").parent("li").siblings().removeClass('current');
            //$("#header_nav a[href='#!/myblog']").parent("li").addClass('current');
        }
    }
});

// 添加文章
avalon.component('ms-editArticle',{
    template:readHTML('components/widget/editArticle.html'),
    defaults:{
        content: "",
        onReady:function(){

            var config={
                filterMode : false, //不会过滤HTML代码
                resizeType : 1,
                imageUploadJson : '/kindeditor-4.1.7/jsp/upload_json.jsp',
                fileManagerJson : '/kindeditor-4.1.7/jsp/file_manager_json.jsp',
                allowUpload : true,
                allowPreviewEmoticons : true,
                allowFileManager : true,
                afterCreate : function() {
                    var self = this;
                    if(document){
                        KindEditor.ctrl(document, 13, function() {
                            self.sync();
                            document.forms['example'].submit();
                        });

                        KindEditor.ctrl(self.edit.doc, 13, function() {
                            self.sync();
                            document.forms['example'].submit();
                        });
                    }
                },
                afterBlur: function(){this.sync();},//和DWZ 的 Ajax onsubmit 冲突,提交表单时 编辑器失去焦点执行填充内容
                newlineTag : "br"
            };
            kedit('editor_id',config);
        }
    }
});

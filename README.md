# avalon-blog-fellow
使用avalon.js编辑的博客静态单页面应用。

#主框架版本
  avalon.js  2.2.4

#运行环境：
  需要xampp或其他支持php脚本的web服务器环境。
  
  http://localhost:8080/avalon-blog-fellow/home/index.html

#使用插件：
  1） kindeditor编辑器
  2） APlayer 播放器
  3） mmRouter avalon 路由
  4） vmc.slider.full.min.js
  ...
  
# 模块化编程
  页面采用require加载js文件，使用components.js文件定义avalon组件。
  
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

本项目只是一个简单的静态blog，很多功能没有具体实现，界面也有不少瑕疵。但作为学习avalon框架应该绰绰有余了。

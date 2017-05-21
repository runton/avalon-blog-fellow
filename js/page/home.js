/**
 * Created by Administrator on 2017/5/4.
 */
require.config({
    baseUrl: 'js/lib/',  //相对于index.html页面文件的地址
    paths:{   //这里配置的地址，都是相对于上方的baseUrl的
        $: 'jquery-1.12.0.min',
        bootstrap: 'bootstrap.min',
        domReady:'domReady',
        avalon: 'avalon',
        mmHistory: 'mmHistory',
        mmRouter: 'mmRouter',
        css: 'css',  //加上css.js
        slider:'vmc.slider.full.min',
        Query: 'query',
        Paging: 'paging',
        components: '../page/components'
    },
    shim:{
        $:{exports: "$"},
        avalon: { exports: "avalon" },
        mmHistory:{ deps: ['avalon']},
        mmRouter:{ deps: ['avalon']},
        components:{deps: ['avalon']},
        bootstrap: { deps: ['$'] },
        Query: { exports: "Query",deps: ['$'] },
        Paging:{exports: "Paging",deps: ['$','Query']},
        slider: { deps: ['$'] }
    }
});

require(['$',"domReady",'avalon','bootstrap','mmHistory','mmRouter','slider','query','paging','components'], function($,domReady) {
    (function($) {
        $.fn.placeholder = function(options) {
            var opts = $.extend({}, $.fn.placeholder.defaults, options);
            var isIE = document.all ? true : false;
            return this.each(function() {
                var _this = this,
                    placeholderValue = _this.getAttribute("placeholder"); //缓存默认的placeholder值
                if (isIE) {
                    _this.setAttribute("value", placeholderValue);
                    _this.onfocus = function() {
                        $.trim(_this.value) == placeholderValue ? _this.value = "" : '';
                    };
                    _this.onblur = function() {
                        $.trim(_this.value) == "" ? _this.value = placeholderValue : '';
                    };
                }
            });
        };
    })(jQuery);

    $("input").placeholder();

    var vm = avalon.define({
        $id: "root",
        pageUrl:"/home"  //默认为home.html
    });

    //添加路由规则
    //avalon.router.add("/home", callback);
    //avalon.router.add("/special", callback);
    function callback() {
        //vm.pageUrl=this.path; //如果url后缀变成"#!/index"，则pageUrl为“home.html”

        if(this.path==='/'||this.path==='/home'){
            vm.pageUrl="/home";
        }else if(this.path==='/special'){
            vm.pageUrl="/special";
        }else if(this.path==='/rankList'){
            vm.pageUrl="/rankList";
        }else if(this.path==='/forum'){
            vm.pageUrl="/forum";
        }else if(this.path==='/member'){
            vm.pageUrl="/member";
        }else if(this.path==='/myblog'){
            vm.pageUrl="/myblog";
        }else if(this.path==='/about'){
            vm.pageUrl="/about";
        }else if(this.path==='/article'){
            vm.pageUrl="/article";
        }else if(this.path==='/content'){
            vm.pageUrl="/content";
        }
    }
    avalon.router.get("/*path", callback); //劫持url hash并触发回调
    avalon.history.start(); //历史记录堆栈管理
    //启动扫描机制,让avalon接管页面
    avalon.scan(document.body)
});
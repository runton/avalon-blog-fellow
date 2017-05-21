/**
 * Created by Administrator on 2017/4/30.
 */
(function($) {
    $.fn.placeholder = function(options) {
        var opts = $.extend({}, $.fn.placeholder.defaults, options);
        var isIE = document.all ? true : false;
        return this.each(function() {
            var _this = this,
                placeholderValue = _this.getAttribute("placeholder"); //»º´æÄ¬ÈÏµÄplaceholderÖµ
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
//
//var ap4 = new APlayer({
//    element: document.getElementById('player4'),
//    narrow: false,
//    autoplay: true,
//    showlrc: false,
//    mutex: true,
//    theme: '#ad7a86',
//    mode: 'random',
//    music: [
//        {
//            title: 'Seve',
//            author: 'Tez Cadey',
//            url: 'http://www.tingge123.com/mp3/2016-01-11/1452487230.mp3',
//            pic: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000004NI9pl30Wyz4.jpg?max_age=2592000'
//        },
//        {
//            title: 'See You Again',
//            author: 'Wiz Khalifa',
//            url: 'http://sc1.111ttt.com/2015/1/04/25/97251325272.mp3',
//            pic: 'https://y.gtimg.cn/music/photo_new/T002R300x300M0000039Pp2W372JsM.jpg?max_age=2592000'
//        },
//        {
//            title: 'Sunny day',
//            author: 'Joy Williams',
//            url: 'http://sc.111ttt.com/up/mp3/48786/FBD4A7E7CA866AECEFA53BAE9B1B23EF.mp3',
//            pic: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000001G2kl31ivkpb.jpg?max_age=2592000'
//        },
//        {
//            title: 'See You Again',
//            author: 'Wiz Khalifa',
//            url: 'http://sc1.111ttt.com/2015/1/04/25/97251325272.mp3',
//            pic: 'https://y.gtimg.cn/music/photo_new/T002R300x300M0000039Pp2W372JsM.jpg?max_age=2592000'
//        },
//        {
//            title: 'See You Again',
//            author: 'Wiz Khalifa',
//            url: 'http://sc1.111ttt.com/2015/1/04/25/97251325272.mp3',
//            pic: 'https://y.gtimg.cn/music/photo_new/T002R300x300M0000039Pp2W372JsM.jpg?max_age=2592000'
//        }
//    ]
//});

var vm =avalon.define({
    $id:'root'
});

function readHTML(path) {
    return $.ajax({
        async: false,
        url: path,
        success: function (result) {
            return result;
        }
    }).responseText;
}

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
        }
    }
});
avalon.component('ms-footer',{
    template:readHTML('components/footer.html'),
    defaults:{
        content: ""
    }
});
avalon.component('ms-aside',{
    template:readHTML('components/widget/asideTool.html'),
    defaults:{
        content: "",
        toggle:false,
        openMusicPlayer: function(){
            if(vm.toggle){
                $('#Mplayer').css('opacity','0');
                $('#Mplayer').css('left','-490px');
                vm.toggle=false;
            }else{
                $('#Mplayer').css('left','50px');
                $('#Mplayer').css('opacity','1');
                vm.toggle=true;
            }
        },
        toggleNav:function(e){
            var target = e.target;
        },
        onReady:function(){
            var ap4 = new APlayer({
                element: document.getElementById('player4'),
                narrow: false,
                autoplay: true,
                showlrc: false,
                mutex: true,
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
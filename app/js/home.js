define(function(require,exports,module){
	var Home = {
		initPage:function(){
			this.homepage();
			this.headerpage();
			this.footerpage();

		},

		// 主页头部
		headerpage:function(){
			var _html = require('../view/header.html');
			var headerHtml = _.template(_html);
			$('.header').html(headerHtml);

			// 语言选择下拉菜单
			$('.header .nav-btn').hover(function(){
				$('.nav-btn .others').stop().slideDown(400)
			},function(){
				$('.nav-btn .others').stop().slideUp(400);
			});
			$('.header .nav-signup').hover(function(){
				$(this).animate({backgroundColor:"#000"})
			})

		},

        // 主页尾部
		footerpage:function(){
			var _html = require('../view/footer.html')
			var footerHtml = _.template(_html);
			$('footer').html(footerHtml);
		},

        // 主页内容
		homepage:function(){
			var _html = require('../view/home.html');
			var homeHtml = _.template(_html);
			$('.content').html(homeHtml);

			// ****************   banner图轮播  ******************
			var timer = setInterval(runLoop,3000);
			var showIndex = 0;

			function runLoop(){
                showIndex++;
                if(showIndex == $('.banner .item li').length){
                   showIndex = 0;
                }
                $('.banner .item li').eq(showIndex).fadeIn(300).siblings().fadeOut(300);
                $('.banner .item li').eq(showIndex).find('.banner-down').addClass('animated fadeInDown5').siblings('.banner-up').addClass('animated fadeInUp5')
                $('.banner .tip a').eq(showIndex).addClass('active').siblings().removeClass('active')
			}
			// hover icon时轮播图的效果
			$('.tip a').hover(function(){
                
				// 清除定时器
				clearInterval(timer);
				// 获取当前hvoer元素的下标
				var index = $(this).index();
				// 定义hover时动画效果
				$('.banner .item li').eq(index).stop().show().siblings().stop().hide();
				$('.banner .item li').eq(index).find('.banner-down').stop().addClass('animated fadeInDown5').siblings('.banner-up').stop().addClass('animated fadeInUp5')
                $(this).addClass('active').siblings().removeClass('active')
			},function(){
                
                // 鼠标离开时
                var index = $(this).index();
                // 重启定时器
                timer = setInterval(runLoop,3000);
                showIndex = index;
			})

			// ---------------------- map图轮播 --------------------------

			   var mapTimer = setInterval(mapLoop,3000);
			   var mapIndex = 0;
			   function mapLoop(){
			   	mapIndex++;
			   	if(mapIndex == $('.map-hot').length){
			   		mapIndex = 0;
			   	}
			   	$('.map-hot').eq(mapIndex).show().siblings('.map-hot').hide()
			   }

            // ------------------ sec7点击时的效果 --------------------------

               $('.section7 .prev').hover(function(){
               	 $(this).addClass('active1')
               },function(){
               	$(this).removeClass('active1')
               });
               $('.section7 .next').hover(function(){
               	 $(this).addClass('active2')
               },function(){
               	$(this).removeClass('active2')
               });
               $('.section7 .prev').click(function(){
               	$('.pic-con').animate({marginLeft:'0px'})
               })
               $('.section7 .next').click(function(){
               	$('.pic-con').animate({marginLeft:'-320px'})
               })


		    // ----------------  当滚动时出现的动画效果 -----------------------

		    function scrollNumber(element,cssname){
               var a,b,c,d ;
               
               a = $(element).offset().top;
               c = $(window).scrollTop(); //浏览器可视窗口顶端距离网页顶端的高度
               d = $(window).height();    //浏览器可视窗口的高度

               if(c + d >a){
               	$(element).addClass((cssname))
               }
		    }

		    function scrollFun(){
		    	scrollNumber('.phone-img','fadeInUp6 animated');
				scrollNumber('.section3 .page-title','fadeInDown5 animated');
				scrollNumber('.section3 .item-box','fadeInUp5 animated');
				scrollNumber('.section4 .text-area','fadeInUp5 animated');
				scrollNumber('.section5 .main .item1','fadeInUp5 animated');
				scrollNumber('.section5 .main .item2','fadeInUp5 animated');
				scrollNumber('.section6 .main .title','fadeInDown5 animated');
				scrollNumber('.section6 .main .logo-box','fadeInUp5 animated');
				scrollNumber('.section6 .main .btn','fadeInUp5 animated');
				scrollNumber('.section7 .main .title','slideSec1 animated');

		    }

		     $(document).ready(function(e) {
                scrollFun();
                $('.sec1-title').addClass('animated slideSec1');
		    	$('.section1 li').addClass('slideUpSec1 animated');
		    	$('.section1 .item1').addClass('animatedSec1-1');
		    	$('.section1 .item2').addClass('animatedSec1-2');
		    	$('.section1 .item3').addClass('animatedSec1-3');
		    	$('.section1 .item4').addClass('animatedSec1-4');
		    	$('.section1 .item5').addClass('animatedSec1-5');
                $(window).scroll(function() {
                    scrollFun();
                });
            });
		}


	}

	module.exports = Home
})
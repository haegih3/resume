(function($) {
  $(function() {
    var $win = $(window);
			
    //go-top 버튼 보이기
    $win.on('scroll', function() {
      var winH = $win.height(),
          scrolled = $win.scrollTop();
      if (scrolled > winH /2) {
          $('.goTop').fadeIn();
        } else {
          $('.goTop').fadeOut();
        }
      });
    
    //클릭하면 경로 가져오기
    $('#gra .contents a, .app .swiper-slide a').on('click', function(e) {
      e.preventDefault();
      var content = $(this).children('img').attr('src');
    //pop 이미지 html 넣기
      var $pop = $('.popContainer'),
          $wrap = $pop.find('.popWrap')/*,
          html = '<img src="" alt="">'*/;
      $wrap.prepend("<img src='" + content + "' alt=''>");
      $pop.fadeIn();
    });
    
//사이즈별
    if ($win.width() > 1550) {//720이상 pc
			
      //패럴렉스
      var $win = $(window),
          winH = $win.height(),
          scrolled = $win.scrollTop(),
          docH = $(document).height(),
          $gnbGroup = $('.gnbGroup'),
          $gnb = $('.gnb'),
          $section = $('section'),
          sp = 500;

      $section.height(winH);

      $win.on('resize', function() {
        $section.height(winH);
      });
      //메뉴 클릭
      $gnb.on('click', 'a', function(e) {
        e.preventDefault();

        var i = $(this).index(),
            winH = $win.outerHeight(),
            posY = winH * i;
        $('html, body').stop().animate({
          scrollTop: posY
        }, sp);
      });
      //휠로 스크롤할 때
      $section.on('mousewheel', function(e, delta) {
        e.preventDefault();

        var currentIndex = $(this).index(),
            first = 0,//첫번째 section의 인덱스값
            last = $section.length - 1;

        if (delta > 0 && currentIndex != first) {
            //위로 올렸을 때(휠값을 받은 delta가 양수일때) 실행구문
            var prevTop = $(this).prev().offset().top;				
            $('html, body').stop().animate({
              scrollTop: prevTop
            }, sp);
          } else if (delta < 0 && currentIndex != last) {
            //아래로 내렸을 때(휠값을 받은 delta가 음수일때)
            var nextTop = $(this).next().offset().top;
            $('html, body').stop().animate({
              scrollTop: nextTop
            }, sp);
          }
        });
      //scroll에 따른 실행문
      $win.on('scroll', function() {
        var num = $section.length,
            scrollTop = $win.scrollTop() + winH/2;
        for (var i = 0; i < num; i++) {
          if (winH * i <= scrollTop && winH * (i + 1) > scrollTop) {
            $gnb.find('a').removeClass('on');
            $gnb.find('a').eq(i).addClass('on');
          }
        }
      });
      //실행
      $win.trigger('scroll');
//패럴렉스 끝
      
			//swiper
			var swiper = new Swiper('.swiper-container', {
        /*autoplay: {
          delay: 2000,
        },*/
        loop:true,
				slidesPerView: 1,
				spaceBetween: 10,
				// init: false,
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
				breakpoints: {
					640: {
						slidesPerView: 3,
						spaceBetween: 20,
					},
					768: {
						slidesPerView: 5,
						spaceBetween: 40,
					},
					1024: {
						slidesPerView: 6,
						spaceBetween: 50,
					},
				}
			});
			
		//gnbGroup제어
			$win.on('scroll', function() {
        var winH = $win.height(),
            scrolled = $win.scrollTop(),
            docH = $(document).height(),
            $gnbGroup = $('.gnbGroup');
				if (scrolled < winH/3) {
					$gnbGroup.css('left', '-200%');
				} else if (scrolled >= docH - (winH *1.5) ) {
					$gnbGroup.css('left', '-200%');
				} else {
					$gnbGroup.css('left', 0);
				}
			});
      
      //막대그래프
      $win.on('scroll', function() {
        var scrolled = $win.scrollTop(),
            winH = $win.outerHeight();
        $('#ski').each(function() {
          //스크롤 된 거리
          var $skills = $('#ski'),
              $rate = $skills.find('.rate'),
              $bars = $skills.find('.bars'),
              skillsTop = $skills.offset().top;
          if (scrolled >= skillsTop) {
            $rate.add($bars).addClass('on');
          }
        });
      });
		} else if ($win.width() <= 1550 && $win.width() >= 1220) {
      //패럴렉스
      var $win = $(window),
          winH = $win.height(),
          scrolled = $win.scrollTop(),
          docH = $(document).height(),
          $gnbGroup = $('.gnbGroup'),
          $gnb = $('.gnb'),
          $section = $('section'),
          sp = 500;

      $section.height(winH);

      $win.on('resize', function() {
        $section.height(winH);
      });
      //메뉴 클릭
      $gnb.on('click', 'a', function(e) {
        e.preventDefault();

        var i = $(this).index(),
            winH = $win.outerHeight(),
            posY = winH * i;
        $('html, body').stop().animate({
          scrollTop: posY
        }, sp);
      });
      //휠로 스크롤할 때
      $section.on('mousewheel', function(e, delta) {
        e.preventDefault();

        var currentIndex = $(this).index(),
            first = 0,//첫번째 section의 인덱스값
            last = $section.length - 1;

        if (delta > 0 && currentIndex != first) {
            //위로 올렸을 때(휠값을 받은 delta가 양수일때) 실행구문
            var prevTop = $(this).prev().offset().top;				
            $('html, body').stop().animate({
              scrollTop: prevTop
            }, sp);
          } else if (delta < 0 && currentIndex != last) {
            //아래로 내렸을 때(휠값을 받은 delta가 음수일때)
            var nextTop = $(this).next().offset().top;
            $('html, body').stop().animate({
              scrollTop: nextTop
            }, sp);
          }
        });
      //scroll에 따른 실행문
      $win.on('scroll', function() {
        var num = $section.length,
            scrollTop = $win.scrollTop() + winH/2;
        for (var i = 0; i < num; i++) {
          if (winH * i <= scrollTop && winH * (i + 1) > scrollTop) {
            $gnb.find('a').removeClass('on');
            $gnb.find('a').eq(i).addClass('on');
          }
        }
      });
      //실행
      $win.trigger('scroll');
//패럴렉스 끝
      
			//swiper
			var swiper = new Swiper('.swiper-container', {
        /*autoplay: {
          delay: 2000,
        },*/
        loop:true,
				slidesPerView: 1,
				spaceBetween: 10,
				// init: false,
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
				breakpoints: {
					640: {
						slidesPerView: 3,
						spaceBetween: 20,
					},
					768: {
						slidesPerView: 5,
						spaceBetween: 40,
					},
					1024: {
						slidesPerView: 6,
						spaceBetween: 50,
					},
				}
			});
      
      //막대그래프
      $win.on('scroll', function() {
        var scrolled = $win.scrollTop(),
            winH = $win.outerHeight();
        $('#ski').each(function() {
          //스크롤 된 거리
          var $skills = $('#ski'),
              $rate = $skills.find('.rate'),
              $bars = $skills.find('.bars'),
              skillsTop = $skills.offset().top;
          if (scrolled >= skillsTop) {
            $rate.add($bars).addClass('on');
          }
        });
      });
      
      //gnbGroup제어
			$win.on('scroll', function() {
				var scrolled = $win.scrollTop(),
						docH = $(document).height(),
          	winH = $win.outerHeight(),
            $gnbGroup = $('.gnbGroup');
				if (scrolled < winH/3) {
					$gnbGroup.css('top', '-100%');
				} else if (scrolled >= docH - (winH *1.5) ) {
					$gnbGroup.css('top', '-100%');
				} else {
					$gnbGroup.css('top', 0);
				}
			});
      
      //menu bar
      $('.menuBar').on('click', function() {
        $(this).toggleClass('on');
        $('.gnb').toggleClass('on');
      });
      //gnb
      $('.gnb').on('click', function() {
        $('.menuBar').removeClass('on');
        $('.gnb').removeClass('on');
      });
    } else if ($win.width() < 1220 && $win.width() > 720) {
      
      
      //막대그래프
      $win.on('scroll', function() {
        var scrolled = $win.scrollTop(),
            winH = $win.outerHeight();
        $('#ski').each(function() {
          //스크롤 된 거리
          var $skills = $('#ski'),
              $rate = $skills.find('.rate'),
              $bars = $skills.find('.bars'),
              skillsTop = $skills.offset().top;
          if (scrolled >= skillsTop) {
            $rate.add($bars).addClass('on');
          }
        });
      });
      
      //gnbGroup제어
			$win.on('scroll', function() {
				var scrolled = $win.scrollTop(),
						docH = $(document).height(),
          	winH = $win.outerHeight(),
            $gnbGroup = $('.gnbGroup');
				if (scrolled < winH/3) {
					$gnbGroup.css('top', '-100%');
				} else if (scrolled >= docH - (winH *1.5) ) {
					$gnbGroup.css('top', '-100%');
				} else {
					$gnbGroup.css('top', 0);
				}
			});
      
      //menu bar
      $('.menuBar').on('click', function() {
        $(this).toggleClass('on');
        $('.gnb').toggleClass('on');
      });
      //gnb
      $('.gnb').on('click', function() {
        $('.menuBar').removeClass('on');
        $('.gnb').removeClass('on');
      });
    } else {//720이하 모바일
      
      //gnbGroup제어
			$win.on('scroll', function() {
				var scrolled = $win.scrollTop(),
						docH = $(document).height(),
          	winH = $win.outerHeight(),
            $gnbGroup = $('.gnbGroup');
				if (scrolled < winH/3) {
					$gnbGroup.css('top', '-100%');
				} else if (scrolled >= docH - (winH *1.5) ) {
					$gnbGroup.css('top', '-100%');
				} else {
					$gnbGroup.css('top', 0);
				}
			});
      
      //menu bar
      $('.menuBar').on('click', function() {
        $(this).toggleClass('on');
        $('.gnb').toggleClass('on');
      });
      //gnb
      $('.gnb').on('click', function() {
        $('.menuBar').removeClass('on');
        $('.gnb').removeClass('on');
      });
      
      //막대그래프
      $win.on('scroll', function() {
        var scrolled = $win.scrollTop(),
            winH = $win.outerHeight();
        $('#ski').each(function() {
          //스크롤 된 거리
          var $skills = $('#ski'),
              $rate = $skills.find('.rate'),
              $bars = $skills.find('.bars'),
              skillsTop = $skills.offset().top;
          if (scrolled >= (skillsTop - 20)) {
            $rate.add($bars).addClass('on');
          }
        });
      });
      
      //swiper
			var swiper = new Swiper('.swiper-container', {
        /*autoplay: {
          delay: 2000,
        },*/
        loop:true,
				slidesPerView: 1,
				spaceBetween: 10,
				// init: false,
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
			});
      
		}
    
  });
})(jQuery);
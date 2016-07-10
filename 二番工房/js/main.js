$(function() {
	// この中に処理を記述する
	$('a[href*=#]').click(function () {
		var speed = 400;
		var href = $(this).attr('href');
		var target = $(href == '#' || href == '' ? 'html' : href);
		var position = target.offset().top;
		$('body,html').animate({
			scrollTop: position
		}, speed, 'swing', function () {
			location.href = href;
		});
		return false;
	});
	
	// topButtonを押した時の処理
	var $topButton = $('#topButton');
	$topButton.on('click', function () {
		var speed = 600;
		$('body,html').animate({
			scrollTop: (0)
		}, speed, 'swing', function () {
			window.scrollTo(0, 0);
		});
	});
	
	// h1を押したときの処理
	var $topH1 = $('#topH1');
	$topH1.on('click', function () {
		var speed = 600;
		$('body,html').animate({
			scrollTop: (0)
		}, speed, 'swing', function () {
			window.scrollTo(0, 0);
		});
	});
	
	// スライドの処理 company
	var $companySlider = $('#companySlider');
	var $companyNav = $('#companyNav');
	var $companyNavLi = $companyNav.find('> ul > li');
	var $companySliderContent = $companySlider.find('> div');
	var companyCurrentNum = 0;
	companyMove(companyCurrentNum);
	// クリックした際の動作
	// li
	$companyNavLi.on('click', function () {
		// クリックした要素の数を探す
		var index = $companyNavLi.index($(this));
		companyMove(index);
	});
	// スライドの中身の処理
	function companyMove(index) {
		// indexに不正な数字が入っていた場合
		if(index < 0) {
			companyCurrentNum = $companyNavLi.length - 1;
		} else if (index >= $companyNavLi.length) {
			companyCurrentNum = 0;
		} else {
			companyCurrentNum = index;
		}
		// liにclass'on'をつける
		$companyNavLi.removeClass('on');
		$companyNavLi.eq(companyCurrentNum).addClass('on');
		// divにclass'on'をつける
		$companySliderContent.removeClass('on');
		$companySliderContent.eq(companyCurrentNum).addClass('on');
	}
	
	// スライドの処理 recruit
	var $recruitSlider = $('#recruitSlider');
	var $recruitNav = $('#recruitNav');
	var $recruitNavLi = $recruitNav.find('> ul > li');
	var $recruitSliderContent = $recruitSlider.find('> div');
	var recruitCurrentNum = 0;
	recruitMove(recruitCurrentNum);
	// クリックした際の動作
	// li
	$recruitNavLi.on('click', function () {
		// クリックした要素の数を探す
		var index = $recruitNavLi.index($(this));
		recruitMove(index);
	});
	// スライドの中身の処理
	function recruitMove(index) {
		// indexに不正な数字が入っていた場合
		if(index < 0) {
			recruitCurrentNum = $recruitNavLi.length - 1;
		} else if (index >= $recruitNavLi.length) {
			recruitCurrentNum = 0;
		} else {
			recruitCurrentNum = index;
		}
		// liにclass'on'をつける
		$recruitNavLi.removeClass('on');
		$recruitNavLi.eq(recruitCurrentNum).addClass('on');
		// divにclass'on'をつける
		$recruitSliderContent.removeClass('on');
		$recruitSliderContent.eq(recruitCurrentNum).addClass('on');
	}
	
	// スライドの高さの指定
//		var $companyHeight = $companySlider.find('> #companyOverview').height();
//		$companySlider.css({minHeight: $companyHeight});
});
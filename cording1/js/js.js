
$(function() {
    $('.header-btn').on('click', function(){// .btnをクリックすると〜
        $('body').toggleClass('open');// .btnにcloseというクラスが追加される

      });
    });


    $(window).scroll(function() {
      if ($(this).scrollTop() > 50) { // スクロール量が50pxを超えた場合、背景を変更する
        $('header').addClass('active');
      } else {
        $('header').removeClass('active');
      }
    });
    $(window).scroll(function() {
      if ($(this).scrollTop() > 50) { // スクロール量が50pxを超えた場合、背景を変更する
        $('.header-btn').addClass('active');
      } else {
        $('.header-btn').removeClass('active');
      }
    });
    $(window).scroll(function() {
      if ($(this).scrollTop() > 50) { // スクロール量が50pxを超えた場合、背景を変更する
        $('.header-logo').addClass('active');
      } else {
        $('.header-logo').removeClass('active');
      }
    });
    $(window).scroll(function() {
      if ($(this).scrollTop() > 50) { // スクロール量が50pxを超えた場合、背景を変更する
        $('.header-list li').addClass('active');
      } else {
        $('.header-list li').removeClass('active');
      }
    });
  

    $('.slider').slick({
      fade:true,//切り替えをフェードで行う。初期値はfalse。
      autoplay: true,//自動的に動き出すか。初期値はfalse。
      autoplaySpeed: 3000,//次のスライドに切り替わる待ち時間
      speed:1000,//スライドの動きのスピード。初期値は300。
      infinite: true,//スライドをループさせるかどうか。初期値はtrue。
      slidesToShow: 1,//スライドを画面に3枚見せる
      slidesToScroll: 1,//1回のスクロールで3枚の写真を移動して見せる
      arrows: true,//左右の矢印あり
      prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
      nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
      dots: true,//下部ドットナビゲーションの表示
          pauseOnFocus: false,//フォーカスで一時停止を無効
          pauseOnHover: false,//マウスホバーで一時停止を無効
          pauseOnDotsHover: false,//ドットナビゲーションをマウスホバーで一時停止を無効
  });

  //スマホ用：スライダーをタッチしても止めずにスライドをさせたい場合
  $('.slider').on('touchmove', function(event, slick, currentSlide, nextSlide){
      $('.slider').slick('slickPlay');
  });

  $(function() {

    $(window).on("scroll", function() {
        if ($(this).scrollTop() > 100) {
            $(".top-btn").fadeIn(300);
            } else {
            $(".top-btn").fadeOut(300);
        }
    });

    $(window).on("scroll", function() {
      if ($(this).scrollTop() > 100) {
          $(".header-nonidex").fadeIn(300);
          } else {
          $(".header-nonidex").fadeOut(300);
      }
  });

});


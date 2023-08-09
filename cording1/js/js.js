
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


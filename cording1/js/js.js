
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
      var count =$("#slider-item li").length;

      var current = 1;

      var next = 2;

      var interval = 3000;

      var duration = 500;

      var timer;

      $("#slider-item li:not(:first-child)").hide();

      timer = setInterval(slideTimer , interval);
      function slideTimer(){
        $("#slider-item li:nth-child(" + current + ")").fadeOut(duration);
        $("#slider-item li:nth-child(" + next + ")").fadeIn(duration);

        current = next;
        next = ++next;
        if(next > count) {
          next = 1;
        }
        $("#slider-btn li a").removeClass("target");
        $("#slider-btn li:nth-child("+ current +") a")
        .addClass("target");
      }
      $("#slider-btn li a").click(function(){
        next =$(this).html();
        clearInterval(timer);
        timer = setInterval(slideTimer, interval);
        slideTimer();
        return false;
      });
    });
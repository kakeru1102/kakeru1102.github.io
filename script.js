$(function(){
$(".index-btn").click(function(){
  $('.active').removeClass('active');
  var clickedTech=$(".index-btn").index($(this));
  $('.tech').eq(clickedTech).addClass('active');
});

$(".h-a").click(function(){
  var id=$(this).attr("href");
  var position=$(id).offset().top;
  $("html,body").animate({
    'scrollTop':position
  },500);
});
});

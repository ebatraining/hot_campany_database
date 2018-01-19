$(function() {
  var h = $(window).height();
 
  $('#wrapper').css('display','none');
  $('#loader-bg ,#loader').height(h).css('display','block');
});
 
$(window).load(function () { //全ての読み込みが完了したら実行
  $('#loader-bg').delay(3000).fadeOut(2800);
  $('#loader').delay(2800).fadeOut(2600);
  $('#wrapper').css('display', 'block');
});
 
//10秒たったら強制的にロード画面を非表示
$(function(){
  setTimeout('stopload()',12000);
});
 
function stopload(){
  $('#wrapper').css('display','block');
  $('#loader-bg').delay(3000).fadeOut(2800);
  $('#loader').delay(2800).fadeOut(2600);
}
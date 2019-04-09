$(document).ready(function () {

      var slideCount = $('#slider ul li').length;
      var slideWidth = $('#slider ul li').width();
      var slideHeight = $('#slider ul li').height();
      var sliderUlWidth = slideCount * slideWidth;
      
      $('#slider').css({ width: slideWidth, height: slideHeight });
      
      $('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
      
      $('#slider ul li:last-child').prependTo('#slider ul');
  
      function moveLeft() {
          $('#slider ul').animate({
              left: + slideWidth
          }, 200, function () {
              $('#slider ul li:last-child').prependTo('#slider ul');
              $('#slider ul').css('left', '');
          });
      };
  
      function moveRight() {
          $('#slider ul').animate({
              left: - slideWidth
          }, 200, function () {
              $('#slider ul li:first-child').appendTo('#slider ul');
              $('#slider ul').css('left', '');
          });
      };
  
      $('a.control_prev').click(function () {
          moveLeft();
      });
  
      $('a.control_next').click(function () {
          moveRight();
      });


  
  });    
  
  
var listEl = document.querySelector('.products-grid');
var btnLeft = document.querySelector('.left-btn');
var btnRight = document.querySelector('.right-btn');
count = 0;
$(btnLeft).on("click", function(e) {
    count++;
    listEl.style.left = count * 286 + 'px';
    if (count > -2) {
        btnRight.style.display = 'block';
    }
    if (count >= 0) {
        btnLeft.style.display = 'none';
    }
});
$(btnRight).on("click", function(e) {
    count--;
    listEl.style.left = count * 286 + 'px';
    if (count < 0) {
        btnLeft.style.display = 'block';
    }
    if (count <= -2) {
        btnRight.style.display = 'none';
    }
});


$(".bg-hover").on("click", function(){
    var urlImg = $(this).parent().find("img").attr("src")

    $(".modal").find("img").attr("src", urlImg)
   
    $(".modal").fadeIn()
    
    $(".modal").on("click", function(){
        $(this).fadeOut()
      
    }) 
})
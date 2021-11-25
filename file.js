$(document).ready(function () {
    $(window).scroll(function () {
      var scrollTop = $(window).scrollTop();
  
      if (scrollTop >= 150 ) {
        $(".nav-container").addClass("solid-nav");
      } else {
        $(".nav-container").removeClass("solid-nav");
      }
    });
  });
  function myFunction() {
    var x = document.getElementById("demo");
    if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
    } else { 
      x.className = x.className.replace(" w3-show", "");
    }
  }  
  function showDivs(n) 
  {
      var i;
      var x = document.getElementsByClassName("mySlides");
      var dots = document.getElementsByClassName("demo");
      if (n > x.length) {slideIndex = 1}
      if (n < 1) {slideIndex = x.length}
      for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
      }
      for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" w3-white", "");
      }
      x[slideIndex-1].style.display = "block"; 
      dots[slideIndex-1].className += " w3-white";
  }
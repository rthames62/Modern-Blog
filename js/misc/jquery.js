$(window).scroll(function(){
  let scroll = $(window).scrollTop();

  if(scroll >= 50){
    $("nav.navigation").addClass("active");
  } else {
    $("nav.navigation").removeClass("active");
  }
})

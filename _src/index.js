import $ from "jquery"

function updateHomeView(){
  var el;
  

  var w = $(".wrapper").width();
  // var video_margin_left = w*0.1;


  $(".home-video").width(w);
  // $(".home-video").css("margin-left", video_margin_left);  

}

// on ready
// test
$(function(){
  updateHomeView();
});

$( window ).resize(function() {
  updateHomeView();
})

// $(window).scroll(function(){
//   var scrollTop = $(window).scrollTop();
//   console.log(scrollTop);

//   var el;
//   el = $(".home-intro-name");
//   el.css("margin-left", -scrollTop * 3);
// })


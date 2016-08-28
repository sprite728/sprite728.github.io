import $ from "jquery"

function updateHomeView(){
  var el;
  var window_w = $(window).width();
  
  console.log(window_w);
  
  if(window_w > 800) {
    var w = $(".wrapper").width();
    var pos = $(".wrapper").offset().left;
    var video_w = w*0.8;
    var video_margin_left = w*0.1;


    $(".home-video").width(video_w);
    $(".home-video").css("margin-left", video_margin_left);



    var video_h = video_w*0.5625;

    el = $(".home-intro-name");
    el.css("margin-top", video_h*0.19);
    el.width(pos + video_w);
    el.height(video_h*0.81);  
    el.css("position", "fixed");

    el = $(".home-intro-name h2");
    el.css("margin-top", video_h*0.25); //0.25
    el.css("margin-left", pos/2);

    el = $(".home-intro-description");
    el.css("margin-top", "0px");
    el.css("margin-left", video_w*0.35);
    el.width(video_w*0.55);
    el.height(video_h);  
    el.css("position", "absolute");
    
    el = $(".home-intro-description p");
    el.css("margin-top", video_h*0.4);
    el.css("margin-left", video_w*0.15*0.1);
    el.css("margin-right", video_w*0.15*0.1);
    el.height(video_h); 
  } else {
    var w = $(".wrapper").width();
    var pos = $(".wrapper").offset().left;
    // var video_w = w*0.8;
    var video_w = w;
    var video_h = video_w*0.5625;
    var video_margin_left = w*0.1;


    $(".home-video").width(video_w);
    // $(".home-video").css("margin-left", video_margin_left);
    $(".home-video").css("margin-left", 0);
    $(".home-video").css("margin-right", 0);


    el = $(".home-intro-name");
    el.width(video_w);
    el.css("margin-left", 0);
    el.css("margin-right", 0);
    el.css("margin-bottom", 30);
    el.css("position", "static");
    // el.css("padding-left", video_w*0.1);
    // el.css("padding-right", video_w*0.1);


    el = $(".home-intro-description");
    el.width(video_w);
    // el.css("margin-left", video_w*0.1);
    // el.css("margin-right", video_w*0.1);
    el.css("margin-left", 0);
    el.css("margin-right", 0);
    el.css("margin-top", 30);
    el.css("position", "static");


    el = $(".home-intro-description p");
    // el.css("margin-top", video_h*0.4);
    el.css("margin-top", 30);
    el.css("margin-left", 0);
    // el.css("margin-left", video_w*0.1);
    // el.css("margin-right", video_w*0.1);

     
  }

  

}

// on ready
// test
$(function(){
  updateHomeView();
});

$( window ).resize(function() {
  updateHomeView();
})

$(window).scroll(function(){
  var scrollTop = $(window).scrollTop();
  console.log(scrollTop);

  var el;
  el = $(".home-intro-name");
  el.css("margin-left", -scrollTop * 3);
})


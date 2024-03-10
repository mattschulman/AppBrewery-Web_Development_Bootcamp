// $("h1").addClass("big-title margin-50");
// $("h1").text("Bye");

// $("button").text("Don't click me")  
// $("button").html("<em>Hey</em>");

// $("a").attr("href", "https://www.yahoo.com");

// $("h1").click(function() {
//   $("h1").css("color", "purple");
// });

// for (var i=0; i<5; i++) {
//   document.querySelectorAll("button")[i].addEventListener("click", function () {
//     document.querySelector("h1").style.color = "purple";
//   });    
// }

// $("button").click(function() {
//   $("h1").css("color", "purple");
// });

$("input").keypress(function(event) {
  console.log(event.key);
});

$("body").keypress(function(event) {
  $("h1").text(event.key)
});

// $("h1").on("mouseover", function() {
//   $("h1").css("color", "blue");
// });

// $("button").click(function() {
//   $("h1").hide();
// });

// $("button").click(function() {
//   $("h1").toggle();
// });

// $("button").click(function() {
//   $("h1").fadeToggle();
// });

// $("button").click(function() {
//   $("h1").slideToggle();
// });

$("button").click(function() {
  $("h1").slideUp().slideDown().animate({opacity: 0.5});
});
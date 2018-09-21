$(document).ready(function() {
  $("button#gbg").click(function() {
    $("body").removeClass();
    $("body").addClass("green-background");
  });

  $("button#ybg").click(function() {
    $("body").removeClass();
    $("body").addClass("yellow-background");
  });

  $("button#rbg").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background");
  });
});

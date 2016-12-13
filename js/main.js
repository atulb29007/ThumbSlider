$(document).ready(function () {
                   $("nav a").click(function () {
                      //  var classesClicked = $("this").className;
                       $("nav a").removeClass("active");
                       $(this).addClass("active");
                   });
               });
$(document).ready(function () {
  $("#slider a").click(function () {
    $("#slider a").removeClass("active");
      $(this).addClass("active");
    });
  });





















$(function() {
  $(".show").on("click", function(e) {
    e.preventDefault();
    $(this).parent().toggleClass('rotati')
    var content = $(this).closest("tr").next().find(".content");
    $(".content").not(content).slideUp();
    content.slideToggle();
    content.toggleClass('rotati')
  });
});

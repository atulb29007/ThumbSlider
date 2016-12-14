$(document).ready(function () {

  var currentThumb = function (listSelector){
    var numberItems = $(listSelector).size();
    var classes;
    for (var i=0; i< numberItems; i++){
      if (!($("li").eq(i).hasClass("notOn"))){
        return i;
        break;
      }
    }
  }

  var setBackground = function (givenIndex){
    //Deactivating current photo
    var currentOn = currentThumb("#thumblist>li");
    $("li").eq(currentOn).addClass("notOn");
    //Setting given photo
    $("li").eq(givenIndex).removeClass("notOn");
    var backgroundImage = "url('img/slides/photo"+givenIndex+".png')";
    $(".imageDiv").css('background-image',backgroundImage);
  }

  var clickBackground = function (directionIn){
    var currentOn = currentThumb("#thumblist>li");
    //determining next index
    var nextOne = $("#thumblist>li").eq(currentOn).next(".notOn").index();
    if (nextOne < 0){
      nextOne = 0;
    }
    //determining previous index
    var prevOne = $("#thumblist>li").eq(currentOn).prev(".notOn").index();
    if (prevOne < 0){
      prevOne = $("#thumblist>li").size();
      prevOne--;
    }
    if (directionIn==1){
      //activating next photo
      setBackground(nextOne);
    }
    else {
      //activating previous photo
      setBackground(prevOne);
    }
  }

  $("#thumblist>li").click(function() {
    var clickedIndex = $("li").index(this);
    //activating clicked photo
    setBackground(clickedIndex);
    var nextOne = $(this).next(".notOn").index();
    var prevOne = $(this).prev(".notOn").index();
    // console.log(nextOne,prevOne);
  });

  $(".rightSlide>i").click(function() {
    clickBackground(1);
  });
  $(".leftSlide>i").click(function() {
    clickBackground(0);
  });

  $(document).keydown(function(event){
    if (event.keyCode == 37) {
      clickBackground(0);
    }
    else if (event.keyCode == 39) {
      clickBackground(1);
    }
  });

});

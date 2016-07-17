function handleColor(bloc) {
  if (bloc.hasClass("bloc-red")) {
    $(".image_fond").removeClass("imagefond_green")
                    .removeClass("imagefond_blue")
                    .removeClass("imagefond_pink");
    $("body, .progress-count").removeClass("green")
             .removeClass("blue")
             .removeClass("pink");
    $(".image_fond").addClass("imagefond_red");
    $("body, .progress-count").addClass("red");
  } else if (bloc.hasClass("bloc-blue")) {
    $(".image_fond").removeClass("imagefond_green")
                    .removeClass("imagefond_red")
                    .removeClass("imagefond_pink");
    $("body, .progress-count").removeClass("green")
             .removeClass("red")
             .removeClass("pink");
    $("body, .progress-count").addClass("blue");
    $(".image_fond").addClass("imagefond_blue");
  } else if (bloc.hasClass("bloc-green")) {
    $(".image_fond").removeClass("imagefond_blue")
                    .removeClass("imagefond_red")
                    .removeClass("imagefond_pink");
    $("body, .progress-count").removeClass("blue")
             .removeClass("red")
             .removeClass("pink");
    $("body, .progress-count").addClass("green");
    $(".image_fond").addClass("imagefond_green");
  } else if (bloc.hasClass("bloc-pink")) {
    $(".image_fond").removeClass("imagefond_blue")
                    .removeClass("imagefond_red")
                    .removeClass("imagefond_green");
    $("body, .progress-count").removeClass("blue")
             .removeClass("red")
             .removeClass("green");
    $("body, .progress-count").addClass("pink");
    $(".image_fond").addClass("imagefond_pink");
  }
}


$(function() {
  $(".second-page").hide();
  $(".third-page").hide();
  $(".img_fond_1").on("click", function() {
    $(".first-page").hide(300);
    $(".second-page").show(300);
    $(".third-page").hide(300);
  });
  $(".home").on("click", function() {
    $(".first-page").show(300);
    $(".second-page").hide(300);
    $(".third-page").hide(300);
  });
  $(".img_fond_2").on("click", function() {
    $(".first-page").hide(300);
    $(".second-page").hide(300);
    $(".third-page").show(300);
  });
  $(".list-group-item").on("click", function() {
    handleColor($(this));
  });
});

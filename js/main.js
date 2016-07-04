function handleColor(bloc) {
  if (bloc.hasClass("bloc-red")) {
    $(".image_fond").removeClass("imagefond_green")
                    .removeClass("imagefond_blue")
                    .removeClass("imagefond_pink");
    $("body").removeClass("green")
             .removeClass("blue")
             .removeClass("pink");
    $(".image_fond").addClass("imagefond_red");
    $("body").adClass("red");
  } else if (bloc.hasClass("bloc-blue")) {
    $(".image_fond").removeClass("imagefond_green")
                    .removeClass("imagefond_red")
                    .removeClass("imagefond_pink");
    $("body").removeClass("green")
             .removeClass("red")
             .removeClass("pink");
    $("body").adClass("blue");
    $(".image_fond").addClass("imagefond_blue");
  } else if (bloc.hasClass("bloc-green")) {
    $(".image_fond").removeClass("imagefond_blue")
                    .removeClass("imagefond_red")
                    .removeClass("imagefond_pink");
    $("body").removeClass("blue")
             .removeClass("red")
             .removeClass("pink");
    $("body").adClass("green");
    $(".image_fond").addClass("imagefond_green");
  } else if (bloc.hasClass("bloc-pink")) {
    $(".image_fond").removeClass("imagefond_blue")
                    .removeClass("imagefond_red")
                    .removeClass("imagefond_green");
    $("body").removeClass("blue")
             .removeClass("red")
             .removeClass("green");
    $("body").adClass("pink");
    $(".image_fond").addClass("imagefond_pink");
  }
}


$(function() {
  $(".second-page").hide();
  $(".image_fond").on("click", function() {
    $(".first-page").hide(300);
    $(".second-page").show(300);
  });
  $(".home").on("click", function() {
    $(".first-page").show(300);
    $(".second-page").hide(300);
  });
  $(".list-group-item").on("click", function() {
    handleColor($(this));
  });
});
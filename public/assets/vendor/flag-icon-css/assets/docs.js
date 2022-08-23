window.onload = function () {
  $(".all-flags .flag-icon-background").click(function (event) {
    const flag = $(event.currentTarget).attr("title");
    const w = 640;
    const h = 480;
    const left = screen.width / 2 - w / 2;
    const top = screen.height / 2 - h / 2;

    if (flag) {
      window.open(
        "flags/4x3/" + flag + ".svg",
        "flag-4x3",
        "width=" + w + ", height=" + h + ", top=" + top + ", left=" + left
      );
    }
  });
};

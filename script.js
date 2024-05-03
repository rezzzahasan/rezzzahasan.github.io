const menuIcon = document.getElementById("menu-icon");
const menuList = document.getElementById("menu-list");
menuIcon.addEventListener("click", () => {
  menuList.classList.toggle("hidden");
});

// Parallax
$(window).on("load", function () {
  $(".biography").addClass("view");
  $(".sub-container").addClass("view");
});

$(window).scroll(function () {
  let wScroll = $(this).scrollTop();
  if (wScroll > $(".project").offset().top - 400) {
    {
      $(".project-card").each(function (i) {
        setTimeout(function () {
          $(".project-card").eq(i).addClass("view");
        }, 300 * (i + 1));
      });
    }
  }
  if (wScroll > $(".certificate-container").offset().top - 400) {
    $(".certificate-container").addClass("view");
  }
});

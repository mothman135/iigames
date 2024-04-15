window.addEventListener("scroll", function() {
    var navbars = document.getElementsByClassName("navbar");
    for (var i = 0; i < navbars.length; i++) {
      if (window.scrollY > 0) {
        navbars[i].classList.add("small");
      } else {
        navbars[i].classList.remove("small");
      }
    }
  });
  
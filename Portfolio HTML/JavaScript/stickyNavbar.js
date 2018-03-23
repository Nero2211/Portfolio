window.onscroll = function() {myFunction()};

            var navbar = document.getElementById("navbar");
            var sticky = navbar.offsetTop;

            function myFunction() {
              if (window.pageYOffset >= sticky) {
                navbar.classList.add("sticky")
                navbar.style.position = "fixed";
              } else {
                navbar.classList.remove("sticky");
                navbar.style.position = "sticky";
              }
            }
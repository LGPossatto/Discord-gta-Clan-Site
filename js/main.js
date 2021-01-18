const burgBtn = document.querySelector("#burg-btn");
const _header = document.querySelector("#header");
const _body = document.querySelector("body");
const _html = document.querySelector("html");

burgBtn.addEventListener("click", () => {
  _header.classList.toggle("btn-active");
  _html.classList.toggle("lock-screen");
});

// Hide Show Navbar
let didScroll = false;
const didScrollFunc = () => {
  didScroll = true;
};

let prevScrollpos = window.pageYOffset;
const moveNavBar = () => {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector("#navbar").classList.remove("nav-animation");
  } else {
    if (!_header.classList.contains("btn-active") && currentScrollPos >= 75) {
      document.querySelector("#navbar").classList.add("nav-animation");
    }
  }
  prevScrollpos = currentScrollPos;
};

setInterval(() => {
  if (didScroll && window.innerWidth <= 550) {
    moveNavBar();
    didScroll = false;
  }
}, 333);

window.addEventListener("scroll", didScrollFunc);

// handle img change
(() => {
  document.querySelector("#hero-img").style.backgroundImage =
    "url(/images/index-imgs/hero-img-b.png)";
})();

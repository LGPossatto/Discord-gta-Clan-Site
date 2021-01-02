const burgBtn = document.querySelector('#burg-btn');
const _header = document.querySelector('#header');
const _body = document.querySelector('body');

burgBtn.addEventListener('click', () => {
    _header.classList.toggle('btn-active');
})

let prevScrollpos = window.pageYOffset;
window.addEventListener('scroll', () => {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector("#navbar").style.top = "0";
  } else {
      if (!_header.classList.contains('btn-active')){
          document.querySelector("#navbar").style.top = "-75px";
      }
  }
  prevScrollpos = currentScrollPos;
})
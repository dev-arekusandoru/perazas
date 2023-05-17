let hammy = document.getElementById("menu-hamburger");
let dropdown = document.getElementById("menu");
let xs = document.getElementsByClassName("dx");
let ys = document.getElementsByClassName("dx1");
console.log(ys);

let dState = 0;
hammy.onclick = function () {
  dropMenu();
};

function dropMenu() {
  if (dState === 0) {
    dropdown.classList.add("expanded");
    xs[0].classList.add("expanded");
    xs[1].classList.add("expanded");

    ys[0].classList.add("expanded");
    ys[1].classList.add("expanded");
    ys[2].classList.add("expanded");

    dState = 1;
  } else {
    dropdown.classList.remove("expanded");
    xs[0].classList.remove("expanded");
    xs[1].classList.remove("expanded");

    ys[0].classList.remove("expanded");
    ys[1].classList.remove("expanded");
    ys[2].classList.remove("expanded");

    dState = 0;
  }
}

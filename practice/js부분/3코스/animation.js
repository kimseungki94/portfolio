// var base = document.querySelector(".outside");
// base.style.transform = "scale(4)";
// base.style.left = "500px";
function init() {
  var btn = document.querySelector("button");
  var target = document.querySelector(".outside");
  btn.addEventListener("click", function () {
    var pre = parseInt(target.style.left);
    target.style.left = pre + 100 + "px";
  });
}

document.addEventListener("load", function () {
  console.log("window Loaded");
});

document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM Loaded");
  init();
});

var count = 0;
var el = document.querySelector(".outside");
el.style.left = "0px";

function run() {
  if (count > 30) return;
  count = count + 1;
  el.style.left = parseInt(el.style.left) + count + "px";
  requestAnimationFrame(run);
}

requestAnimationFrame(run);

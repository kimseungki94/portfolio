setTimeout(() => {
  console.log("현재시간은", new Date());
}, 500);

let count = 0;
function animate() {
  setTimeout(() => {
    if (count >= 20) return;
    console.log("현재시간은", new Date());
    count++;
    animate();
  }, 500);
}
animate();

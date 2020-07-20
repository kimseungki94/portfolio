const interval = window.setInterval(() => {
  console.log("현재시간은 ", new Date());
}, 1000);

window.clearInterval(interval);

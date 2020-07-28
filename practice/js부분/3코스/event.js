var log = document.querySelector(".log");
var lists = document.querySelectorAll("ul > li");
var img = document.querySelector("img");
// for (var i = 0, len = lists.length; i < len; i++) {
//   lists[i].addEventListener("click", function (evt) {
//     log.innerHTML = "clicked" + evt.currentTarget.firstElementChild.src;
//   });
// }
// ul.addEventListener("click", function (evt) {
//   //IMG UL
//   console.log(evt.target.tagName, evt.currentTarget.tagName);
// });
// img.addEventListener("click", function () {
//   console.log("image clicked");
// });

// target 각각의 태그의 특징을 호출하는 기능!
var ul = document.querySelector("ul");
ul.addEventListener("click", function (evt) {
  debugger;
  if (evt.target.tagName === "IMG") {
    log.innerHTML = "clicked" + evt.target.src;
  } else if (evt.target.tagName === "LI") {
    log.innerHTML = "clicked" + evt.target.firstChild.src;
  }
});

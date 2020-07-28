var log = document.querySelector(".log");
var lists = document.querySelectorAll("ul > li");
var img = document.querySelector("img");
// for (var i = 0, len = lists.length; i < len; i++) {
//   lists[i].addEventListener("click", function (evt) {
//     log.innerHTML = "clicked" + evt.currentTarget.firstElementChild.src;
//   });
// }
img.addEventListener("click", function () {
  console.log("img tag clicked");
});
ul.addEventListener("click", function (evt) {
  //IMG UL
  console.log(evt.target.tagName, evt.currentTarget.tagName);
});

//1
var parent = document.querySelector("ul");
console.log(parent.innerHTML);
var child = document.createElement("li");
child.innerHTML = "mango";
parent.appendChild(child);

//2

let parent = document.querySelector("ul");

let backchild = document.querySelector("ul li:nth-child(3)");
console.log(backchild.innerHTML);
var child = document.createElement("li");
child.innerHTML = "mango"; 
console.log(child.innerHTML); 
parent.insertBefore(child,backchild);

//3
let backchild = document.querySelector("ul li:nth-child(3)");
var child = document.createElement("li");
child.innerHTML = "mango"; 
backchild.insertAdjacentHTML('beforebegin',child.innerHTML);

//4
let backchild = document.querySelector("ul li:nth-child(5)");
var child = document.querySelector("ul li:nth-child(1)");
backchild.insertAdjacentHTML('beforebegin',child.innerHTML);
child.remove();

//5
let target = document.querySelectorAll(".red");

target.forEach(function(v) {
  v.textContent="";
}); 

//6
var firstLi = document.querySelector(".blue");
var back = firstLi.closest("section");
var front = firstLi.closest("ul");
back.innerHTML = front.innerHTML;








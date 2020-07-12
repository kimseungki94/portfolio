//1
var mango = document.createElement("li");
var mangoText = document.createTextNode("망고");
mango.appendChild(mangoText);

var parent = document.querySelector("ul");
parent.appendChild(mango);

//2
var mango = document.createElement("li");
var mangoText = document.createTextNode("망고");
mango.appendChild(mangoText);

var parent = document.querySelector("ul");
var banana = document.querySelector("li:nth-child(3)");
parent.insertBefore(mango,banana);

//3
var orange = document.querySelector("li:nth-child(3)");
orange.insertAdjacentHTML('afterend',"<li>망고~</li>");

//4
var strawberry = document.querySelector("li:nth-child(5)");
var apple = document.querySelector("li:nth-child(1)");
var parent = document.querySelector("ul");
parent.insertBefore(apple,strawberry); // move를 시켜줌!(잘라내기, 붙이기)

//5
var reds = document.querySelector("li.red");
var parent = document.querySelector("ul");
for(var i=0;i<reds.length;i++){
    parent.removeChild(reds[i]);
}

//6
var bluenode = document.querySelectorAll("section .blue");

Array.from(bluenode).forEach(function(v){
        //var section = v.closest("section");
        var section = v.parentNode.parentNode;
        var h2 = section.querySelector("h2");
        section.removeChild(h2);
})

// for(var i=0;i<bluenode.length;i++){
//     var section = bluenode[i].closest("section");
//     var h2 = section.querySelector("h2");
//     section.removeChild(h2);
// }
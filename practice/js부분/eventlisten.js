//결국 이벤트루프역시 콜백함수이기 때문에 이런원리로 실행됨..
let evt = document.querySelector(".event-tag");
console.log("start")
evt.addEventListener("click",function(e){
    console.log(e.target.className,e.target.nodeName);
    console.log(e);
    
    console.log(e.target);
    
    
})
console.log("end");

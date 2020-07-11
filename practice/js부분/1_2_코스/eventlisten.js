//결국 이벤트루프역시 콜백함수이기 때문에 이런원리로 실행됨..
// 콜백함수는 stack -> webApi(background) -> testQueue에 이동 후 main함수가 끝난뒤 stack에 이벤트루프가 이동시킴
// 즉 동기처리가 모두 끝난후에 비동기처리가 실행된다고 생각하면 될듯
let evt = document.querySelector(".event-tag");
console.log("start")
evt.addEventListener("click",function(e){
    console.log(e.target.className,e.target.nodeName);
    console.log(e);
    
    console.log(e.target);
    
    
})
console.log("end");

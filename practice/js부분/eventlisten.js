let evt = document.querySelector(".event-tag");
evt.addEventListener("click",function(e){
    console.log(e.target.className,e.target.nodeName);
    
    console.log(e.target);
    
    
})
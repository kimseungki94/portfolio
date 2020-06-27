var oReq = new XMLHttpRequest();
oReq.addEventListener("load", function() {
    console.log(this.responseText);
});    
oReq.open("GET", "./station.txt");// 브라우져로 실행시 cors 문제 생김.. File형식을 못받아서 그런듯
//http로 해야 헤더형식으로 가져오는 cors에 맞기 때문에!
oReq.send();


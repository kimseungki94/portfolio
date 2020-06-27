var oReq = new XMLHttpRequest();
oReq.addEventListener("load", function() {
    console.log(this.responseText);
});    
oReq.open("GET", "./station.txt");// 브라우져로 실행시 cors 문제 생김..
oReq.send();


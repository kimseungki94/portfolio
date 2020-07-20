var oReq = new XMLHttpRequest();
oReq.addEventListener("load", function () {
  console.log(this.responseText);
  var outside = document.querySelector(".outside");
  var jsonobject = JSON.parse(this.responseText);
  var fu = jsonobject.station[0];
  outside.innerHTML += "<span>1234</span>" + fu;
});
oReq.open("GET", "./station.txt");
oReq.send();

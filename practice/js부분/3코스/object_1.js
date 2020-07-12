const data = {
    "debug": "on",
    "window": {
        "title": "Sample Konfabulator Widget",
        "name": "main_window",
        "width": 500,
        "height": 500
    },
    "image": { 
        "src": "Images/Sun.png",
        "name": "sun1",
        "hOffset": 250,
        "vOffset": 250,
        "alignment": "center"
    },
    "text": {
        "data": "Click Here",
        "size": 36,
        "style": "bold",
        "name": "text1",
        "hOffset": 250,
        "vOffset": 100,
        "alignment": "center",
        "onMouseUp": "sun1.opacity = (sun1.opacity / 100) * 90;"
    }
}


function numCompare(arr,data){
    for(key in data){
        let value = data[key];
        if(typeof value === "object"){
            numCompare(arr,value);
        }else{
            if(typeof value === "number"){
                arr.push(value);
            }
        }
    }
    return arr;
}
arr=[];
console.log(numCompare(arr,data));




















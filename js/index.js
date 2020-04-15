var body = document.body
for (var i=0;i<96;i++){
    var img = new Image();
    num = parseInt(Math.random()*273);
    img.src = "pkq/" + num + ".jpg";
    
    var x = i%16 * 100 + Math.random()*70;  
    var y = i%6 * 115 + Math.random()*70;
    img.style.left = x + "px";  
    img.style.top = y + "px";
    img.style.width = "100px";
    img.style.hight = "100px";
    var a = 0
    while (a < 0.3){
        a = Math.random();
    }
    img.style.opacity = a;

    body.appendChild(img)
}

var center = document.getElementById('center')
var w = document.body.clientWidth
var h = document.body.clientHeight
center.style.width = w//3 + "px";
center.style.hight = h//3 + "px";


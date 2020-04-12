var body = document.body
for (var i=0;i<100;i++){
    var img = new Image();
    num = parseInt(Math.random()*273);
    img.src = "pkq/" + num + ".jpg";
    var w = document.body.clientWidth - 120;
    var h = document.body.clientHeight + 650;
    var x = Math.random()*w;  
    var y = Math.random()*h;  
    img.style.left = x + "px";  
    img.style.top = y + "px";
    img.style.width = "100px";
    img.style.hight = "100px";
    img.style.opacity = Math.random();

    body.appendChild(img)
}
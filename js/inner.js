var hot = document.getElementsByClassName("c_c")[0];
for (var i=0; i<15; i++){
    var img = new Image();
    num = parseInt(Math.random()*273);
    img.src = "pkq/" + num + ".jpg";
    img.style.width = "200px";
    img.style.hight = "220px";
    hot.appendChild(img)
}

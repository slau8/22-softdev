var pic = document.getElementById("vimage");
var button = document.getElementById("clear");

var draw = function(e){
    console.log("draw");
    var cl = document.createElementNS("http://www.w3.org/2000/svg","circle");
    cl.setAttribute("cx", e.offsetX);
    cl.setAttribute("cy", e.offsetY);
    cl.setAttribute("r", "25");
    cl.setAttribute("fill", "red");
    cl.setAttribute("stroke", "black");
    pic.appendChild(cl);
};

var clear = function(){
    var rect = document.createElementNS("http://www.w3.org/2000/svg","rect");
    rect.setAttribute("x", 0);
    rect.setAttribute("y", 0);
    rect.setAttribute("width", 500);
    rect.setAttribute("height", 500);
    rect.setAttribute("fill", "white");
    pic.appendChild(rect);
};

pic.addEventListener("click", draw);
button.addEventListener("click", clear);


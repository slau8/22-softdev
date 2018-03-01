// Shannon Lau
// Softdev2 pd7
// K07 -- Connect the Dots
// 2018-02-28

var pic = document.getElementById("vimage");
var button = document.getElementById("clear");
var prevX = prevY = null;

var draw = function(e){
    var x = e.offsetX;
    var y = e.offsetY;
    console.log("draw");
    var cl = document.createElementNS("http://www.w3.org/2000/svg","circle");
    cl.setAttribute("cx", x);
    cl.setAttribute("cy", y);
    cl.setAttribute("r", "25");
    cl.setAttribute("fill", "red");
    cl.setAttribute("stroke", "black");
    pic.appendChild(cl);

    if (prevX != null){
      var l = document.createElementNS("http://www.w3.org/2000/svg","line");
      l.setAttribute("x1", prevX);
      l.setAttribute("y1", prevY);
      l.setAttribute("x2", x);
      l.setAttribute("y2", y);
      l.setAttribute("stroke", "black");
      pic.appendChild(l);
    }

    prevX = x;
    prevY = y;
};

var clear = function(){
    var rect = document.createElementNS("http://www.w3.org/2000/svg","rect");
    rect.setAttribute("x", 0);
    rect.setAttribute("y", 0);
    rect.setAttribute("width", 500);
    rect.setAttribute("height", 500);
    rect.setAttribute("fill", "white");
    pic.appendChild(rect);

    prevX = null;
    prevY = null;
};

pic.addEventListener("click", draw);
button.addEventListener("click", clear);

import shape = require("./Shape"); 
import circle = require("./Circle"); 
import triangle = require("./Triangle");  

function drawAllShapes(shapeToDraw: shape.Shape) {
   shapeToDraw.draw(); 
} 

drawAllShapes(new circle.Circle()); //Drawing a circle!!
drawAllShapes(new triangle.Triangle()); //Drawing a triangle!!
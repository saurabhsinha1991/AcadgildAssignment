"use strict";
var circle = require("./Circle");
var triangle = require("./Triangle");
function drawAllShapes(shapeToDraw) {
    shapeToDraw.draw();
}
drawAllShapes(new circle.Circle()); //Drawing a circle!!
drawAllShapes(new triangle.Triangle()); //Drawing a triangle!!

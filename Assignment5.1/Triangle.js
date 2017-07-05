"use strict";
var Triangle = (function () {
    function Triangle() {
    }
    Triangle.prototype.draw = function () {
        console.log("Drawing a triangle!!");
    };
    return Triangle;
}());
exports.Triangle = Triangle;

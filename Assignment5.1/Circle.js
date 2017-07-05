"use strict";
var Circle = (function () {
    function Circle() {
    }
    Circle.prototype.draw = function () {
        console.log("Drawing a circle!!");
    };
    return Circle;
}());
exports.Circle = Circle;

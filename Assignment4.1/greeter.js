var Greeter = (function () {
    function Greeter() {
        this.message = "Welcome to Acadgild";
        // code...
    }
    Greeter.prototype.greet = function () {
        return this.message;
    };
    return Greeter;
}());
var greet = new Greeter();
document.getElementById("greeter").innerHTML = greet.greet();

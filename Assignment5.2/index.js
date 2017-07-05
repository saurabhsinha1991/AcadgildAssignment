var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function MyClassDecoratorExercise_WithoutParams(target) {
    // body...
    console.log(target);
}
var ClassName = (function () {
    function ClassName() {
    }
    return ClassName;
}());
ClassName = __decorate([
    MyClassDecoratorExercise_WithoutParams
], ClassName);
function MyClassDecoratorExercise_WithParams(param) {
    return function (target // The class the decorator is declared on
    ) {
        console.log("ClassDecoratorParams('" + param + "') called on: ", target);
    };
}
var ClassName1 = (function () {
    function ClassName1() {
    }
    return ClassName1;
}());
ClassName1 = __decorate([
    MyClassDecoratorExercise_WithParams("a"),
    MyClassDecoratorExercise_WithParams("b")
], ClassName1);
//Eats Mixin
var Eats = (function () {
    function Eats() {
    }
    Eats.prototype.food = function () {
        console.log("Eating!!");
        this.isHungry = true;
    };
    return Eats;
}());
//Plays Mixin
var Plays = (function () {
    function Plays() {
    }
    Plays.prototype.play = function () {
        console.log("Playing!!");
        this.isPlaying = true;
    };
    return Plays;
}());
//Codes Mixin
var Codes = (function () {
    function Codes() {
    }
    Codes.prototype.code = function () {
        console.log("Coding!!");
        this.isCoding = true;
    };
    return Codes;
}());
var MyActivity = (function () {
    function MyActivity() {
        //Eats
        this.isHungry = false;
        //Plays
        this.isPlaying = false;
        //Codes
        this.isCoding = false;
        console.log(this.isHungry + " : " + this.isPlaying);
    }
    MyActivity.prototype.interact = function () {
        this.food();
        this.play();
        this.code();
    };
    return MyActivity;
}());
applyMixins(MyActivity, [Eats, Plays, Codes]);
var myActivity = new MyActivity();
myActivity.interact();
function applyMixins(derivedCtor, baseCtors) {
    baseCtors.forEach(function (baseCtor) {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(function (name) {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//A
function MyMethodDecorator(target, propertyKey, descriptor) {
    console.log('target' + target);
    console.log('propertyKey' + propertyKey);
    console.log('descriptor' + descriptor);
}
var Class1 = (function () {
    function Class1() {
    }
    Class1.prototype.print = function (output) {
        console.log("classMyMethodDecoratorExample.print (" + output + ") called.");
    };
    return Class1;
}());
__decorate([
    MyMethodDecorator
], Class1.prototype, "print");
var testObj = new Class1();
testObj.print("test");
//B
function MyStaticMethodDecorator(target, propertyKey, descriptor) {
    console.log('target' + target);
    console.log('propertyKey' + propertyKey);
    console.log('descriptor' + descriptor);
}
var Class2 = (function () {
    function Class2() {
    }
    Class2.print = function (output) {
        console.log("MyStaticMethodDecoratorExample.print(" + output + ") called.");
    };
    return Class2;
}());
__decorate([
    MyStaticMethodDecorator
], Class2, "print");
Class2.print("test");

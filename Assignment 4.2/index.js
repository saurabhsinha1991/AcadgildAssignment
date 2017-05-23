var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Animal = (function () {
    function Animal(name, sound) {
        this.name = name;
        this.sound = sound;
    }
    Animal.prototype.move = function (distance) {
        if (distance === void 0) { distance = 0; }
        console.log(distance);
    };
    Animal.prototype.makeSound = function () {
        console.log(this.sound);
    };
    return Animal;
}());
var Tiger = (function (_super) {
    __extends(Tiger, _super);
    function Tiger(name, sound) {
        return _super.call(this, name, sound) || this;
    }
    Tiger.prototype.move = function (distance) {
        if (distance === void 0) { distance = 20; }
        _super.prototype.move.call(this, distance);
    };
    return Tiger;
}(Animal));
var Lion = (function (_super) {
    __extends(Lion, _super);
    function Lion(name, sound) {
        return _super.call(this, name, sound) || this;
    }
    Lion.prototype.move = function (distance) {
        if (distance === void 0) { distance = 25; }
        _super.prototype.move.call(this, distance);
    };
    return Lion;
}(Animal));
var Leopard = (function (_super) {
    __extends(Leopard, _super);
    function Leopard(name, sound) {
        return _super.call(this, name, sound) || this;
    }
    Leopard.prototype.move = function (distance) {
        if (distance === void 0) { distance = 100; }
        _super.prototype.move.call(this, distance);
    };
    return Leopard;
}(Animal));
var Snake = (function (_super) {
    __extends(Snake, _super);
    function Snake(name, sound) {
        return _super.call(this, name, sound) || this;
    }
    Snake.prototype.move = function (distance) {
        if (distance === void 0) { distance = 10; }
        _super.prototype.move.call(this, distance);
    };
    return Snake;
}(Animal));
var mySnake = new Snake("My Snake", "Hissing");
var lion = new Lion("My Lion", "Roar");
var leopard = new Leopard("My Leopard", "Zzzzz...");
mySnake.move();
mySnake.makeSound();
lion.move(50);
lion.makeSound();

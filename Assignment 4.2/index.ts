class Animal {
	name: string;
	sound: string;
	constructor(name: string, sound: string) {
		this.name = name;
		this.sound = sound;
	}
	move(distance: number = 0) {
		console.log(distance);
	}
	makeSound() {
		console.log(this.sound);
	}
}

class Tiger extends Animal {
    constructor(name: string, sound: string) {
    	super(name, sound);
    }
    move(distance: number = 20) {
        super.move(distance);
    }
}

class Lion extends Animal {
    constructor(name: string, sound: string) {
    	super(name, sound);
    }
    move(distance: number = 25) {
        super.move(distance);
    }
}

class Leopard extends Animal {
    constructor(name: string, sound: string) {
    	super(name, sound);
    }
    move(distance: number = 100) {
        super.move(distance);
    }
}

class Snake extends Animal {
    constructor(name: string, sound: string) {
    	super(name, sound);
    }
    move(distance: number = 10) {
        super.move(distance);
    }
}

let tiger = new Tiger("My Tiger", "Roar");
let mySnake = new Snake("My Snake", "Hissing");
let lion = new Lion("My Lion", "Roar");
let leopard = new Leopard("My Leopard", "Zzzzz...");

mySnake.move();
mySnake.makeSound();
lion.move(50);
lion.makeSound();
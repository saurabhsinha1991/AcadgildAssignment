function MyClassDecoratorExercise_WithoutParams(target: Function) {
	// body...
	console.log(target);
}

@MyClassDecoratorExercise_WithoutParams
class ClassName {
	
}

function MyClassDecoratorExercise_WithParams(param: string) {
    return function(
        target: Function // The class the decorator is declared on
        ) {
        console.log("ClassDecoratorParams('" + param + "') called on: ", target);
    }
}

@MyClassDecoratorExercise_WithParams("a")
@MyClassDecoratorExercise_WithParams("b")
class ClassName1 {

}

//Eats Mixin
class Eats {
	isHungry: boolean;
	food() {
		console.log("Eating!!");
		this.isHungry = true;
	}
}

//Plays Mixin
class Plays {
	isPlaying: boolean;
	play() {
		console.log("Playing!!");
		this.isPlaying = true;
	}
}

//Codes Mixin
class Codes {
	isCoding: boolean;
	code() {
		console.log("Coding!!");
		this.isCoding = true;
	}
}

class MyActivity implements Eats, Plays, Codes {

	constructor() {
		console.log(this.isHungry + " : "  + this.isPlaying )
	}

	interact() {
		this.food();
		this.play();
		this.code();
	}

	//Eats
	isHungry: boolean = false;
	food: () => void;

	//Plays
	isPlaying: boolean = false;
	play: () => void;

	//Codes
	isCoding: boolean = false; 
	code: () => void;
}

applyMixins(MyActivity, [Eats, Plays, Codes]);

let myActivity = new MyActivity();
myActivity.interact();

function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}

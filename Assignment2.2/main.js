import * as method from './calculation';

method.add(2, 3);
method.subtract(2, 3);
method.multiply(2, 3);
method.square(10);

//2
class Vehicle {
	constructor(name, type) {
		this.name = name;
		this.type = type;
	}
	getName() {
		console.log(this.name);
	}
	getType() {
		console.log(this.type);
	}
}

class KTM extends Vehicle {
	constructor(name, type) {
		super(name, type);
	}
}

let ktm = new KTM('KTM', 'bike');
ktm.getName();
ktm.getType();

class BMW extends Vehicle {
	constructor(name, type) {
		super(name, type);
	}
}

let bmw = new BMW('BMW', 'car');
bmw.getName();
bmw.getType();

class AUDI extends Vehicle {
	constructor(name, type) {
		super(name, type);
	}
}

let audi = new AUDI('AUDI', 'car');
audi.getName();
audi.getType();
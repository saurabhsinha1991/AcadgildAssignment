abstract class Department {

    constructor(public name: string) {
    }

    printName(): void {
        console.log("Department name: " + this.name);
    }

    abstract printMeeting(): void; // must be implemented in derived classes

}

//Accounting Department
class AccountingDepartment extends Department {

    constructor() {
        super("Accounting and Auditing"); // constructors in derived classes must call super()
    }

    printMeeting(): void {
        console.log("The Accounting Department meets each Monday at 10am.");
    }

}


let accountDepartment: Department; // to create a reference to an abstract type

accountDepartment = new AccountingDepartment(); // to create and assign a non-abstract subclass
accountDepartment.printName();  // output: "Accounting and Auditing"
accountDepartment.printMeeting();  // output: "The Accounting Department meets each Monday at 10am"

// Technical Department
class TechnicalDepartment extends Department {

    constructor() {
         super("Technical Department");
    }

    printMeeting(): void {
        console.log("The Technical people are always working");
    }
}

let techDepartment : Department; // to create a reference to an abstract type

techDepartment = new TechnicalDepartment(); // to create and assign a non-abstract subclass
techDepartment.printName();  // output: "Technical Department"
accountDepartment.printMeeting(); // output: "The Technical people are always working"

//HR Department
class HRDepartment extends Department {

     constructor() {
         super("HR Department");
     }

     printMeeting(): void {
         console.log("For any quries!");
     }
}

let hrDepartment: Department;  // to create a reference to an abstract type

hrDepartment = new HRDepartment();  // to create and assign a non-abstract subclass
hrDepartment.printName();  // output: "HR Department"
hrDepartment.printMeeting();  // ouput: "For any quries!"
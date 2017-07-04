var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Department = (function () {
    function Department(name) {
        this.name = name;
    }
    Department.prototype.printName = function () {
        console.log("Department name: " + this.name);
    };
    return Department;
}());
//Accounting Department
var AccountingDepartment = (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment() {
        return _super.call(this, "Accounting and Auditing") || this;
    }
    AccountingDepartment.prototype.printMeeting = function () {
        console.log("The Accounting Department meets each Monday at 10am.");
    };
    return AccountingDepartment;
}(Department));
var accountDepartment; // to create a reference to an abstract type
accountDepartment = new AccountingDepartment(); // to create and assign a non-abstract subclass
accountDepartment.printName(); // output: "Accounting and Auditing"
accountDepartment.printMeeting(); // output: "The Accounting Department meets each Monday at 10am"
// Technical Department
var TechnicalDepartment = (function (_super) {
    __extends(TechnicalDepartment, _super);
    function TechnicalDepartment() {
        return _super.call(this, "Technical Department") || this;
    }
    TechnicalDepartment.prototype.printMeeting = function () {
        console.log("The Technical people are always working");
    };
    return TechnicalDepartment;
}(Department));
var techDepartment; // to create a reference to an abstract type
techDepartment = new TechnicalDepartment(); // to create and assign a non-abstract subclass
techDepartment.printName(); // output: "Technical Department"
accountDepartment.printMeeting(); // output: "The Technical people are always working"
//HR Department
var HRDepartment = (function (_super) {
    __extends(HRDepartment, _super);
    function HRDepartment() {
        return _super.call(this, "HR Department") || this;
    }
    HRDepartment.prototype.printMeeting = function () {
        console.log("For any quries!");
    };
    return HRDepartment;
}(Department));
var hrDepartment; // to create a reference to an abstract type
hrDepartment = new HRDepartment(); // to create and assign a non-abstract subclass
hrDepartment.printName(); // output: "HR Department"
hrDepartment.printMeeting(); // ouput: "For any quries!"

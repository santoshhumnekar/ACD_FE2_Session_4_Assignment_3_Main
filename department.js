let __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p)) d[p] = b[p];

    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
let Department = (function() {
    function Department(name) {
        this.name = name;
    }
    Department.prototype.printName = function() {
        console.log("Department Name:" + this.name);
    };
    return Department;
}());
let AccountingDepartment = (function(_super) {
    __extends(AccountingDepartment, _super);

    function AccountingDepartment(name) {
        if (name === void 0) { name = "Accounting"; }
        return _super.call(this, name) || this;
    }
    AccountingDepartment.prototype.printName = function() {
        _super.prototype.printName.call(this);
    };
    AccountingDepartment.prototype.printMeeting = function() {
        console.log("This is a Account Section");
    };
    return AccountingDepartment;
}(Department));
let ITDepartment = (function(_super) {
    __extends(ITDepartment, _super);

    function ITDepartment(name) {
        if (name === void 0) { name = "Information Technology"; }
        return _super.call(this, name) || this;
    }
    ITDepartment.prototype.printName = function() {
        _super.prototype.printName.call(this);
    };
    ITDepartment.prototype.printMeeting = function() {
        console.log("This is a IT Section");
    };
    return ITDepartment;
}(Department));
let AdminDepartment = (function(_super) {
    __extends(AdminDepartment, _super);

    function AdminDepartment(name) {
        if (name === void 0) { name = "Admin"; }
        return _super.call(this, name) || this;
    }
    AdminDepartment.prototype.printName = function() {
        _super.prototype.printName.call(this);
    };
    AdminDepartment.prototype.printMeeting = function() {
        console.log("This is a Admin Section");
    };
    return AdminDepartment;
}(Department));
let acc = new AccountingDepartment();
acc.printName();
acc.printMeeting();
let it = new ITDepartment();
it.printName();
it.printMeeting();
let Admin = new AdminDepartment();
Admin.printName();
Admin.printMeeting();
//UC12-Create Employee Payroll data with Employeepayroll Class
class EmployeePayrollData
{
    //properties
    id;
    names;
    salary;

    constructor (id,names,salary) //constructor
     {
        this.id=id;
        this.names=names;
        this.salary=salary;
     }
     //getter and setter method 
    get names() { return this._names; }
    set names(names) { this._names=names; }

    toString() //method
     {
       return "id="+this.id+" name="+this.names+" salary="+this.salary;
     }
}

let employeePayrollData=new EmployeePayrollData(1,"Mark",3000);
console.log(employeePayrollData.toString());
employeePayrollData.names="john";
console.log(employeePayrollData.toString());

//UC12-Create Employee Payroll data with Employeepayroll Class
class EmployeePayrollData
{
    //properties
    id;
    names;
    salary;
    gender;
    startDate;

    constructor (id,names,salary,gender,startDate) //constructor
     {
        this.id=id;
        this.names=names;
        this.salary=salary;
        this.gender=gender;
        this.startDate=startDate;
     }
     //getter and setter method 
    get names() { return this._names; }
    set names(names) { this._names=names; }

    toString() //method
     {
       const options={ year:'numeric',month:'long',day:'numeric'};
       const empDate=this.startDate === undefined ? "undefined" : this.startDate.toLocaleDateString("en-US",options);
       return "id="+this.id+", name="+this.names+", salary="+this.salary+", gender="+this.gender+", startDate="+this.startDate;
     }
}

let employeePayrollData=new EmployeePayrollData(1,"Mark",3000);
console.log(employeePayrollData.toString());
employeePayrollData.names="john";
console.log(employeePayrollData.toString());

let newEmployeePayrollData=new EmployeePayrollData(1,"Terrisa",3000,"F",new Date());
console.log(newEmployeePayrollData.toString());

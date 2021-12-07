//UC12-Create Employee Payroll data with Employeepayroll Class
class EmployeePayrollData
{
    //properties
    id;
    names;
    salary;
    gender;
    startDate;
    pincode;

    constructor (id,names,salary,gender,startDate,pincode) //constructor
     {
        this.id=id;
        this.names=names;
        this.salary=salary;
        this.gender=gender;
        this.startDate=startDate;
     }
     //getter and setter method 
    get names() { return this._names; }
    set names(names) { 
        this._names=names;
    }

    toString() //method
     {
       const options={ year:'numeric',month:'long',day:'numeric'};
       const empDate=this.startDate === undefined ? "undefined" : this.startDate.toLocaleDateString("en-US",options);
       return "id="+this.id+", name="+this.names+", salary="+this.salary+", gender="+this.gender+", startDate="+this.startDate+", pincode="+this.pincode;
     }
}

let employeePayrollData=new EmployeePayrollData(1,"Mark",3000);
console.log(employeePayrollData.toString());
let newEmployeePayrollData=new EmployeePayrollData(1,"Terrisa",3000,"F",new Date());
console.log(newEmployeePayrollData.toString());
//Testing name
try{
    let nameRegex=RegExp('^[A-Z]{1}[a-z]{3,}$');
    employeePayrollData.names="John";
    if(nameRegex.test(employeePayrollData.names))
    {
        console.log(employeePayrollData.toString());
    }
    else throw 'Name is incorrect'
}
catch(e)
{
    console.error(e);
}

//Testing Salary
try{
    let salaryRegex=RegExp("^[1-9]{3,}$");
    employeePayrollData.salary=312456;
    if(salaryRegex.test(employeePayrollData.salary))
    {
        console.log(employeePayrollData.toString());
    }
    else throw 'Salary is incorrect'
}
catch(e)
{
    console.error(e);
}

//Testing Gender
try{
    let genderRegex=RegExp("^[M|F]$");
    employeePayrollData.gender='M';
    if(genderRegex.test(employeePayrollData.gender))
    {
        console.log(employeePayrollData.toString());
    }
    else throw 'Gender is incorrect'
}
catch(e)
{
    console.error(e);
}

//Testing Pincode UC1-Validate 400088
try{
    let pincodeRegex=RegExp("^[0-9]{6}$");
    employeePayrollData.pincode=400088;
    if(pincodeRegex.test(employeePayrollData.pincode))
    {
        console.log(employeePayrollData.toString());
    }
    else throw 'Pincode is incorrect'
}
catch(e)
{
    console.error(e);
}

//Testing Pincode UC2-Validate A400088 should fail
try{
    let pincodeRegex=RegExp("^[0-9]{6}$");
    employeePayrollData.pincode='A400088';
    if(pincodeRegex.test(employeePayrollData.pincode))
    {
        console.log(employeePayrollData.toString());
    }
    else throw 'Pincode is incorrect'
}
catch(e)
{
    console.error(e);
}

//Testing Pincode UC3-Validate 400088B should fail
try{
    let pincodeRegex=RegExp("^[0-9]{6}$");
    employeePayrollData.pincode='400088B';
    if(pincodeRegex.test(employeePayrollData.pincode))
    {
        console.log(employeePayrollData.toString());
    }
    else throw 'Pincode is incorrect'
}
catch(e)
{
    console.error(e);
}


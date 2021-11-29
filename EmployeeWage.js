//UC1-Employee Present Or Absent
const IS_PRESENT=1;

let empCheck=Math.floor(Math.random() * 10) % 3;
if(empCheck == IS_PRESENT)
{
    console.log("Employee is Present");
}
else
{
    console.log("Employee is Absent");
}

//UC2-Ability to Calculate Daily Employee Wage on Part Time and Full Time Employee
const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const PART_TIME_HOURS=4;
const FULL_TIME_HOURS=8;
const WAGE_PER_HOUR=20;

let empHrs=0;
switch(empCheck)
{
    case IS_PART_TIME:
        empHrs=PART_TIME_HOURS;
        break;

    case IS_FULL_TIME:
        empHrs=FULL_TIME_HOURS;
        break;

    default:
        empHrs=0;
}
let empWage=empHrs * WAGE_PER_HOUR;
console.log("Employee Wage: " + empWage);
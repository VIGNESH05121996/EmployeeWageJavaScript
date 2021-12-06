//UC1-Employee Present Or Absent
const IS_PRESENT=1;

let empCheck=Math.floor(Math.random() * 10) % 3;
if(empCheck == IS_PRESENT)
{
    console.log("UC1-Employee is Present");
}
else
{
    console.log("UC1-Employee is Absent");
}

//UC3-Refractor the code with function
const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const PART_TIME_HOURS=4;
const FULL_TIME_HOURS=8;
const WAGE_PER_HOUR=20;

function getWorkingHours(empCheck)
{
    switch(empCheck)
    {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}
empHrs1=0;
empHrs1=getWorkingHours(empCheck);
let empWage1=empHrs1 * WAGE_PER_HOUR;
console.log("UC3-Employee Wage: "+empWage1)

//UC4-Calculate Wage for a Month
const NUM_OF_WORKING_DAYS1=2;
let empHrs2=0;
for(let day=0;day<NUM_OF_WORKING_DAYS1;day++)
{
    empHrs2 += getWorkingHours(empCheck);
}

let empWage2=empHrs2 * WAGE_PER_HOUR;
console.log("UC4-Total Hours: "+empHrs2+" Employee Wage: "+empWage2);

//UC5-Calculate Wage till a condition of total working hours
// of 160 or max days of 20 is reached for a month
const MAX_HRS_IN_MONTH=100;
const NUM_OF_WORKING_DAYS2=10;
let totalEmpHrs=0;
let=totalWorkingDays=0;

while(totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS2)
{
    totalWorkingDays++;
    totalEmpHrs += getWorkingHours(empCheck);
}
let empWage3=totalEmpHrs * WAGE_PER_HOUR;
console.log("UC5-Total Days: "+totalWorkingDays+" Total Hours: "+totalEmpHrs+" Employee Wage: "+empWage3);
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
const MAX_HRS_IN_MONTH1=100;
const NUM_OF_WORKING_DAYS2=10;
let totalEmpHrs1=0;
let totalWorkingDays1=0;

while(totalEmpHrs1 <= MAX_HRS_IN_MONTH1 && totalWorkingDays1 < NUM_OF_WORKING_DAYS2)
{
    totalWorkingDays1++;
    totalEmpHrs1 += getWorkingHours(empCheck);
}
let empWage3=totalEmpHrs1 * WAGE_PER_HOUR;
console.log("UC5-Total Days: "+totalWorkingDays1+" Total Hours: "+totalEmpHrs1+" Employee Wage: "+empWage3);

//UC6-Store Daily Wage In Array
let empHrs3=0;
function calcDailyWage(empHrs3)
{
    return empHrs3 * WAGE_PER_HOUR;
}
const MAX_HRS_IN_MONTH2=160;
const NUM_OF_WORKING_DAYS3=20;
let totalEmpHrs2=0;
let totalWorkingDays2=0;
let empDailyWageArr=new Array();

while(totalEmpHrs2 <= MAX_HRS_IN_MONTH2 && totalWorkingDays2 < NUM_OF_WORKING_DAYS3)
{
    totalWorkingDays2++;
    let empHrs3=getWorkingHours(empCheck);
    totalEmpHrs2 += empHrs3;
    empDailyWageArr.push(calcDailyWage(empHrs3));
}
let empWage4=calcDailyWage(totalEmpHrs2);
console.log("UC6-Total Days: "+totalWorkingDays2+" Total Hours: "+totalEmpHrs2+" Employee Wage: "+empWage4);

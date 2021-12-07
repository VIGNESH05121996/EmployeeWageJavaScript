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

//Array Helper Function
//UC7A-Calculate Total Wage using Array forEach traversal or reduce method
let totEmpWage=0;
function sum(dailyWage)
{
    totEmpWage +=dailyWage;
}
empDailyWageArr.forEach(sum);
console.log("UC7A-Total Days: "+totalWorkingDays2+" Total Hours: "+totalEmpHrs2+" Employee Wage: "+totEmpWage);

function totalWages(totalWage,dailyWage)
{
    return totalWage + dailyWage;
}
console.log("UC7A-Employee Wage with reduce: "+empDailyWageArr.reduce(totalWages,0));

//UC7B-Show the day along with Daily Wage using Array map helper function
let dailyCntr=0;
function mapDayWithWage(dailyWage)
{
    dailyCntr++;
    return dailyCntr+" = "+dailyWage;
}
let mapDayWithWageArr=empDailyWageArr.map(mapDayWithWage);
console.log("UC7B-Daily Wage Map");
console.log(mapDayWithWageArr);

//UC7C-Show Days when Full time wage of 160 were earned
function fulltimeWage(dailyWage)
{
    return dailyWage.includes("160");
}
let fullDayWageArr=mapDayWithWageArr.filter(fulltimeWage);
console.log("UC7C-Daily Wage Filter when Fulltime Wagw Earned");
console.log(fullDayWageArr);

//UC7D-Find the first occurance when full time wage was earned using find function
function findFulltimeWage(dailyWage)
{
    return dailyWage.includes("160");
}
console.log("UC7D-First time Fulltime Wage was earned on Day");
console.log(mapDayWithWageArr.find(findFulltimeWage));

//UC7E-Check if Every Element of Full Time Wage is truely holding Full time wage
function isAllFulltimeWage(dailyWage)
{
    return dailyWage.includes("160");
}
console.log("UC7E-Check All Element have Full Time Wage: ");
console.log(fullDayWageArr.every(isAllFulltimeWage));

//UC7F-Check if there is any Part Time Wage
function isAnyPartTimeWage(dailyWage)
{
    return dailyWage.includes("80");
}
console.log("UC7F-Check if any Part Time Wage: ");
console.log(mapDayWithWageArr.some(isAnyPartTimeWage));

//UC7G-Find the number of days the Employee worked
function totalDaysWorked(numOfDays,dailyWage)
{
    if(dailyWage > 0) return numOfDays+1;
    return numOfDays;
}
console.log("UC7G-Number of Days Employee Worked: ");
console.log(empDailyWageArr.reduce(totalDaysWorked,0));

//UC8-Store Daily Wage in Map
let empHrs4=0;
const MAX_HRS_IN_MONTH3=160;
const NUM_OF_WORKING_DAYS4=20;
let totalEmpHrs3=0;
let totalWorkingDays3=0;
let empDailyWageArr1=new Array();
let empDailyWageMap=new Map();

function calcDailyWage1(empHrs4)
{
    return empWage4 * WAGE_PER_HOUR;
}
while(totalEmpHrs3 <= MAX_HRS_IN_MONTH3 && totalWorkingDays3 < NUM_OF_WORKING_DAYS4)
{
    totalWorkingDays3++;
    let empHrs4=getWorkingHours(empCheck);
    totalEmpHrs3 += empHrs4;
    empDailyWageArr1.push(calcDailyWage1(empHrs4));
    empDailyWageMap.set(totalWorkingDays3,calcDailyWage1(empHrs4));
}
console.log(empDailyWageMap);
function totalWages1(totalWage1,dailyWage1)
{
    return totalWage1 + dailyWage1;
}
console.log("UC8-Employee Wage Map totalHrs: "+Array.from(empDailyWageMap.values()).reduce(totalWages1,0));

//UC9-Arrow Functions
let empDailyHrsMap=new Map();
const findTotal=(totalVal,dailyVal) => {
    return totalVal + dailyVal;
}
let count=0;
let totalHours=Array.from(empDailyHrsMap.values()).reduce(findTotal,0);
let totalSalary=empDailyWageArr1.filter(dailyWage1 => dailyWage1>0).reduce(findTotal,0);
console.log("UC9-Employee Wage With Arrow: "+"Total HOurs: "+totalHours+" Total Wages: "+totalSalary);
let nonWorkingDays=new Array();
let partWorkingDays=new Array();
let fullWorkingDays=new Array();
empDailyHrsMap.forEach((value,key,map)=> {
    if(value == 0) fullWorkingDays.push(key);
    else if (value == 4) partWorkingDays.push(key);
    else nonWorkingDays.push(key);
});
console.log("Full working days: "+fullWorkingDays);
console.log("Part working days: "+partWorkingDays);
console.log("Non working days: "+nonWorkingDays);

//UC10-Object Creation
let totalEmpHrs4=0;
let totalWorkingDays4=0;
let empDailyHrsWageArr=new Array();
while(totalEmpHrs4 <= MAX_HRS_IN_MONTH3 && totalWorkingDays4 < NUM_OF_WORKING_DAYS4)
{
    totalWorkingDays4++;
    let empHrs5=getWorkingHours(empCheck);
    totalEmpHrs4 += empHrs5;
    empDailyHrsWageArr.push(
        {
            dayNum:totalWorkingDays4,
            dailyHours:empHrs5,
            dailyWage2:calcDailyWage1(empHrs5),
            toString(){
                return '\nDay'+this.dayNum+'=>Working Hours is '+this.dailyHours+' And Wage Earned= '+this.dailyWage2
            }
        }
    );
}
console.log("UC10-Showing Daily Hours and Wage Earned: "+empDailyHrsWageArr);
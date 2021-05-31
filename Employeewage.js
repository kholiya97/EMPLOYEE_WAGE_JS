console.log("Welcome to Employee Wage Problem \n")
//UC1 Ability to check Employees is present or absent.
const IS_ABSENT = 0;
let empCheck = Math.floor(Math.random()*10)%2;
if(empCheck == IS_ABSENT)
{
    console.log("Employee is absent");
}
else 
{
    console.log("Employee is present");
}
//UC2 Ability to Calculate Daily Employee Wage based on part time or full time work.
console.log("UC2 Calculating wage for employee");
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS =4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
let empHours = 0;
switch(empCheck) //Calculate wage 
{
    case IS_PART_TIME:
    console.log("Employee is working part time");
    empHours=PART_TIME_HOURS;
    break;
    case IS_FULL_TIME:
    console.log("Employee is working full time");
    empHours = FULL_TIME_HOURS;
    break;
    default:
    empHours =0;
    break;
}
let empWage = empHours*WAGE_PER_HOUR;
console.log("Employee wage: " + empWage);
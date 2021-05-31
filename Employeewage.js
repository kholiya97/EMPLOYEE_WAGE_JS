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
{
console.log("UC2 Calculating wage for employee");
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS =4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
let empHours = 0;
let empCheck = Math.floor(Math.random()*10)%3;
switch(empCheck)
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
}
//UC3 Refactor the UC2 Code to write a function to get work hours.
  console.log("UC3 Refactor the Code to write a function to get work hours");
  const IS_PART_TIME = 1;
  const IS_FULL_TIME = 2;
  const PART_TIME_HOURS =4;
  const FULL_TIME_HOURS = 8;
  const WAGE_PER_HOUR = 20;
  function getWorkingHrs(empCheck)
  {
      switch (empCheck) 
      {
          case IS_PART_TIME:
              return PART_TIME_HOURS;          
          case IS_FULL_TIME:
              return FULL_TIME_HOURS;
          default:       
              return 0;
      }
  }
  
  let empWage = WAGE_PER_HOUR*getWorkingHrs(empCheck);
  console.log("Employee wage: " + empWage);

  //UC4 Calculating total emp wage for a month assuming 20 working day in a month.
console.log("UC4 Calculating total emp wage for a month assuming 20 working day in a month")
const NUM_OF_WORKING_DAYS =20;
let empHours=0;
for(let day =0; day<NUM_OF_WORKING_DAYS; day++)
{
      let empCheck = Math.floor(Math.random()*10)%3;
      empHours += getWorkingHrs(empCheck);
}
empWage = WAGE_PER_HOUR*empHours;
console.log("Total working hours in mmonth: "+empHours+" Total monthly employee wage : " + empWage);

 //UC5 Calculating Wages til a condition of total working hours of 160 or max days of 20 is reached for a month.
 console.log("UC5 Calculating monthly wage given condition")
 const MAX_HOURS_IN_MONTHS=160;
 const MAX_NUMBER_OF_DAYS=20;
 let totalEmpHours=0;
 let totalWorkingDays=0;
 while(totalEmpHours<MAX_HOURS_IN_MONTHS && totalWorkingDays<MAX_NUMBER_OF_DAYS)
 {
     totalWorkingDays++;
     let empCheck = Math.floor(Math.random()*10)%3;
     totalEmpHours += getWorkingHrs(empCheck);
 }
 let totalEmpWage = WAGE_PER_HOUR*totalEmpHours;
 console.log("Total working days  : "+totalWorkingDays+"\nTotal working hours : "+totalEmpHours+" \nTotal employee wage : " + totalEmpWage);
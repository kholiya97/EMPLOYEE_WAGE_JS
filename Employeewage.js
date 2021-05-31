console.log("welcome to employee wage computation problem");
console.log("UC1");
//UC1
{
let checkForEmployeePresence= Math.floor((Math.random()*10)%2);
const IS_ABSENT=0;
if(checkForEmployeePresence==IS_ABSENT)
{
    console.log("employee is absent");
}
else
{
    console.log("employee is present");
}
}

//UC2
//Calculating Daily Wage
//const IS_ABSENT=0;
const IS_ABSENT=0;
const WAGE_PER_HOUR=20;
const TOTAL_WORKING_DAYS=20;
let totalEmpHours=0;
let employeeWage=0;
for(i=0;i<TOTAL_WORKING_DAYS;i++)
{
let emp_hours= getEmpHours();
totalEmpHours+=emp_hours;
employeeWage= WAGE_PER_HOUR*totalEmpHours;
}
console.log("total work hours "+totalEmpHours);
console.log("totol emp wage "+employeeWage);
console.log("total working days "+TOTAL_WORKING_DAYS);
//UC3
function getEmpHours()
{ 
    let emp_hours=0;
    let checkForEmployeePresence= Math.floor((Math.random()*10)%3);
    switch(checkForEmployeePresence)
{
    case 1:
        //console.log("employee is present for part time");
        emp_hours=4;
        return emp_hours;
    case 2:
        //console.log("employee is present for full time");
        emp_hours=8;
        return emp_hours;
    default:
       // console.log("employee is absent");
        return emp_hours;
}
}
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
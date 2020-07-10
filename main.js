function getSleepHours(day){
 if (day==="monday"){
   return 8;
 } else if (day==="tuesday"){
   return 7;
 } else if (day==="wednesday"){
   return 7;
 } else if (day==="thursday"){
   return 6;
 } else if (day==="friday"){
   return 7; 
 } else if (day==="saturday"){
   return 4; 
 } else if (day==="sunday"){
   return 7;
}

//console.log(getSleepHours("monday"));

function getActualSleepHours (){
  function getSleepHours(day){
    return (getSleepHours("Monday")+
    getSleepHours("Tuesday")+
    getSleepHours("Wednesday")+
    getSleepHours("Thursday")+
    getSleepHours("Friday")+
    getSleepHours("Saturday")+
    getSleepHours("Sunday"))
  }
}

console.log(getActualSleepHours())

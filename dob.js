// date of birth determinor
      
function ageBracket(){
      let currentDate=new Date();
      let currentYear= currentDate.getFullYear();
      let yearOfBirth=prompt("Enter your year of birth");
      let userAge=currentYear-yearOfBirth; 
      if(typeof yearOfBirth !== "number"){ 
      if(currentYear <= yearOfBirth)
      return "Invalid year of birth";
      if(userAge < 18)
      return "Minor";
      if((userAge >= 18) & (userAge <= 36))
      return"Youth";
      if(userAge>36)
      return "Elder";
      }
      else;
      return "Not a number";
}   
    console.log(ageBracket());

// date of birth determinor
      
function ageBracket(){
    const currentYear= 2022;
      let yearOfBrith=prompt("Enter your year of birth");
      let userAge=currentYear-yearOfBrith; 
      console.log(userAge)  
      if(userAge < 18)
      return "Minor";
      if((userAge >= 18) & (userAge <= 36))
      return"Youth";
      else;
      return "Elder"
    }   
    console.log(ageBracket());

    
    //  fizzBuzz challenge
    function fizzBuzz(firstParameter,secondParameter,){
        let combinedParameter=firstParameter+secondParameter;
        console.log(combinedParameter.length);
        if (combinedParameter.length % 3 ===0)
          return "Fizz";
          if (combinedParameter.length % 5 ===0)
          return "Buzz";
          if ((combinedParameter.length % 3 ===0) && (combinedParameter.length % 5 ===0))
          return "FizzBuzz";
          else;
          return "Not divisible by both 3 & 5" ;       
      }
      console.log(fizzBuzz("Nabudde","Belinda"));
       
      
  
// /  integers floats character strings        
        function mySort(nums) {
            let odds = [];
            let evens = [];
            let char =[];
              for (let i = 0; i < nums.length; i++) {
                if(typeof(nums[i]) === "number"){ 
                    if ((nums[i] % 2) === 0){
                  evens.push(nums[i]);
                }
                  if ((nums[i] % 2) === 1) {
                    odds.push(nums[i]);    
                }
        }
                else {
                    char.push(nums[i]);
                }             
          }
          let newOdds=odds.sort((a, b) => a - b);
          let newEvens=evens.sort((a, b) => a - b);
          let newChar=char.sort();
          let sortedArray={'evens':newEvens,'odds':newOdds,'char':newChar};
          console.log(sortedArray);
      }
    mySort([3,'a',7,'x',20,'d',4,'f',8]);       
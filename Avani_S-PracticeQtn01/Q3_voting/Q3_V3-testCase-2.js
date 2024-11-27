
// version-3.3

function checkEligibility(age){
    if(typeof(age) !== "number"){
      return "Invalid input. Inputs should be a number.";
    }
      if(age > 18){
          return "eligible";
      }else{
          return "ineligible";
      }
  }
  
  function testForEligibility(){
      let sample = ["hello",2,33,4,55];
      let output = ['eligible','eligible','eligible','ineligible','eligible'];
      let result = 0;
      let i = 0;
  
     for(i = 0; i < sample.length; i++){
        result = checkEligibility(sample[i]);
  
        if(result == output[i]){
          console.log(`Test case ${i+1} passed`);
        }else{
          console.log(`Test case ${i+1} failed\n${result}`);
        }
     }
  }
  testForEligibility();
//Select the form and result display elements
const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");
//add event listener for when the form is submitted
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  const criticalError = document.querySelector('.critical-error');
  
  // try catch block to run through all the possible error scenarios 
  try {
    //ensures that there are inputs in both fields 
    if (!dividend || !divider){
      //prints error message to the result bar 
      result.innerHTML = 'Division not performed. Both values are required in inputs. Try again';
      //throws error which will be logged 
      throw new Error('Division not performed. Both values are required in inputs. Try again')
     
    }
     //ensures that no undefined answers are given
    else if (divider<1 && divider>-1) {
      //prints error message to the result bar
      result.innerHTML = 'Division not performed. Invalid number provided. Try again';
      //prints error message to the result bar
      throw new Error('Division not performed. Invalid number provided. Try again')
      
    }
    //ensures that the inputs are all numbers
    else if (isNaN(dividend) || isNaN(divider)){
      criticalError.style.display = "flex"; //this makes the critical error message visible 
      throw new Error('Something critical went wrong. Please reload the page')
    } else {
      //this code block include the division formula
      const division = dividend / divider
      const twoDecimals = division.toFixed(0);
      result.innerText = twoDecimals;
    }
  } catch (error) {
    //logs error message to the console
    console.log("Error:", error.message)
  }

  
});







/* form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  if (!dividend || !divider){
    alert('Division not performed. Both values are required in inputs. Try again')
  }else if (dividend !== 0 && divider === 0){
    alert('Division not performed. Invalid number provided. Try again')
  }else if (isNaN(dividend) && isNaN(divider)){
    throw new Error('Something critical went wrong. Please reload the page')
  } else {
    const division = dividend / divider
    const twoDecimals = division.toFixed(2);
    result.innerText = twoDecimals;
  }
}); */ 
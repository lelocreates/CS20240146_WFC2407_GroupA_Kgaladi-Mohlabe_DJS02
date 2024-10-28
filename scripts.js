const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  const criticalError = document.querySelector('.critical-error');
  try {
    if (!dividend || !divider){
      alert('Division not performed. Both values are required in inputs. Try again')
    }else if (dividend !== 0 && divider === 0){
      alert('Division not performed. Invalid number provided. Try again')
    }else if (isNaN(dividend) || isNaN(divider)){
      criticalError.style.display = "flex";
      throw new Error('Something critical went wrong. Please reload the page')
    } else {
      const division = dividend / divider
      const twoDecimals = division.toFixed(2);
      result.innerText = twoDecimals;
    }
  } catch (error) {
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
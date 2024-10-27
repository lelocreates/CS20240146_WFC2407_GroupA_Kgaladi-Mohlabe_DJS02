const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  if (!dividend || !divider){
    alert('Division not performed. Both values are required in inputs. Try again')
  }else{
    const division = dividend / divider
    const twoDecimals = division.toFixed(2);
    result.innerText = twoDecimals;
  }
});
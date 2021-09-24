const initialPrice = document.querySelector("#initial-price");
const quantity = document.querySelector("#quantity");
const currentPrice = document.querySelector("#current-price");
const submit = document.querySelector("#submit");
const output = document.querySelector("#output");

submit.addEventListener("click", function calculateProfitLoss(){
    if(Number(initialPrice.value) > 0 && Number(quantity.value) > 0 && Number(currentPrice.value) > 0)
    {
        output.style.color = '#1b998b';
        output.innerText = "everything ok";
    }
    else{
        output.style.color = '#bb4430';
        output.innerText = "Enter all fields❗";
    }
})
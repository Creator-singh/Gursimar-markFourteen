const initialPrice = document.querySelector("#initial-price");
const quantity = document.querySelector("#quantity");
const currentPrice = document.querySelector("#current-price");
const submit = document.querySelector("#submit");
const output = document.querySelector("#output");


function calculateProfitLoss(initial, qty, current)
{
    if(initial < current)
    {
        //profit
        var profit = (current - initial) * qty;
        var profitPercentage = (profit/(initial * qty)) * 100;
        output.style.color = '#1b998b';
        output.innerText = `Yay! your Profit is ${profit} and Profit Percentage is ${profitPercentage.toFixed(2)}% :)`;
    }
    else if(initial > current)
    {
        //loss
        var loss = (initial - current) * qty;
        var lossPercentage = (loss/(initial * qty)) * 100;
        output.style.color = '#bb4430';
        output.innerText = `Oops! your Loss is ${loss} and Loss Percentage is ${lossPercentage.toFixed(2)}% :(`;
    }
    else{
        //net zero
        output.style.color = 'black';
        output.innerText = " No Profit/Loss 😪";
    }
}

submit.addEventListener("click", function submitHandler(){
    if(Number(initialPrice.value) > 0 && Number(quantity.value) > 0 && Number(currentPrice.value) > 0)
    {
        var initial = Number(initialPrice.value);
        var qty = Number(quantity.value);
        var current = Number(currentPrice.value);
        calculateProfitLoss(initial, qty, current);
    }
    else{
        output.style.color = '#bb4430';
        output.innerText = "Enter all fields❗";
    }
})
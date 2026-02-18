document.getElementById("cashout-btn").addEventListener("click", function () {
    const cashoutNumber = getValueFromInput("cashout-number");
    if (cashoutNumber.length != 11) {
        alert('Invalid Agent Number!');
        return;
    }

    const cashoutAmount = getValueFromInput("cashout-amount");

    const currentBalance = getBalance();

    const newBalance = currentBalance - Number(cashoutAmount);
    console.log(newBalance);
    if (newBalance < 0) {
        alert('Invalid Amount!')
        return;
    }
    const pin = getValueFromInput('cashout-pin');
    if (pin === '1234') {
        alert('Cashout Successful✨');
        setBalance(newBalance);

        //1 history container ke dhore anbo
        const history = document.getElementById("history-container");

        //2 new div create korbo
        const newHistory = document.createElement("div");

        //3 new div a inner html add korbo
        newHistory.innerHTML = `
    <div class="transaction-card p-5 bg-base-100">
        Cashout ${cashoutAmount} Taka Success , at ${new Date()}
    </div>
    `;

        //4 history container a new div append korbo
        history.append(newHistory);

    } else {
        alert('Invalid Pin!');
        return;
    }
});

// document.getElementById('cashout-btn').addEventListener('click',function () {
//     const cashoutNumberInput = document.getElementById('cashout-number');
//     const cashoutNumber = cashoutNumberInput.value;
//     console.log(cashoutNumber);
//     if (cashoutNumber.length !=11) {
//         alert ('Invalid Agent Number!');
//         return;
//     }

//     const cashoutAmountInput = document.getElementById('cashout-amount');
//     const cashoutAmout = cashoutAmountInput.value;
//     console.log(cashoutAmout);

//     const balanceElement = document.getElementById('balance');
//     const balance = balanceElement.innerText;
//     console.log(balance);

//     const newBalance = Number(balance) - Number(cashoutAmout);

//     if (newBalance<0) {
//         alert("Invalid Amount!");
//         return;
//     }

//     const cahsoutPinInput = document.getElementById('cashout-pin');
//     const pin = cahsoutPinInput.value;
//     if (pin === '1234') {
//         alert('Cashout Successfull✨');
//         console.log("New Balance: ",newBalance);
//         balanceElement.innerText= newBalance;
//     } else {
//         alert('Invalid Pin!');
//         return;
//     }
// })

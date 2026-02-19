document.getElementById("bill-pay-btn").addEventListener("click", function () {
    const selectionType = getValueFromInput("pay-bill-type");
    if (selectionType == "Select Bill Type") {
        alert('Select Bill Type!!');
        return;
    }
    const billerAccount = getValueFromInput("biller-number");
    if (billerAccount.length != 11) {
        alert('Invalid Biller Acc.!!');
        return;
    }
    const currentBalance = getBalance();
    const payingAmount = getValueFromInput("pay-amount");
    const newBalance = currentBalance - Number(payingAmount);
    if (newBalance < 0) {
        alert("Insufficient Balance !!");
        return;
    }
    const pin = getValueFromInput("bill-pay-pin");
    if (pin == "1234") {
        alert('Payment Done Successfully!!');
        setBalance(newBalance);
         const history = document.getElementById("history-container")
         const newDiv = document.createElement('div');
         newDiv.innerHTML=`
         <div class="transaction-card p-5 bg-base-100">
             ${selectionType} Bill paid ${payingAmount} Taka Successfully to ${billerAccount} ,at ${new Date()}
         </div>
         `;
         history.append(newDiv);
    } else {
        alert('Invalid Pin!!');
        return;
    }
})
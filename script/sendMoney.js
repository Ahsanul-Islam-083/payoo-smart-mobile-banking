document.getElementById("transfer-btn").addEventListener("click", function () {
    const userNumber = getValueFromInput("user-number");
    if (userNumber.length != 11) {
        alert("Invalid User Acc.!!");
        return;
    }
    const currentBalance = getBalance();
    const transferAmount = getValueFromInput("transfer-amount");
    const newBalance = currentBalance - Number(transferAmount);
    if (newBalance < 0) {
        alert("Invalid Amount!!");
        return;
    }

    const pin = getValueFromInput('transfer-pin');
    if (pin == "1234") {
        alert('Money Transfer Successful');
        setBalance(newBalance);
        const history = document.getElementById("history-container");
        const newDiv = document.createElement('div');
        newDiv.innerHTML = `
    <div class="transaction-card p-5 bg-base-100">
        Money transferred Successfully ${transferAmount} Taka to ${userNumber}  at ${new Date()}
    </div>
        `;
        history.append(newDiv);
    } else {
        alert('Invalid Pin!!');
        return;
    }

})
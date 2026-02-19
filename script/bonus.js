document.getElementById("bonus-btn").addEventListener("click", function () {
    const bonusCoupon = getValueFromInput("bonus-coupon");
    const balance = getBalance();
    const bonus26 = (balance*26)/100;
    const newBalance = balance + bonus26;
    if (bonusCoupon == "ramadan26") {
        alert('Bonus added to the balance successfully!!');
        setBalance(newBalance);
        const history = document.getElementById("history-container");
        const newDiv = document.createElement("div");
        newDiv.innerHTML = `
            <div class="transaction-card p-5 bg-base-100">
        ${bonus26} Taka Bonus Added at ${new Date()} and The New Balance is ${newBalance} Taka.
    </div>
        `;
        history.append(newDiv);
    }else{
        alert("Invalid Coupon Code!!");
        return;
    }
})
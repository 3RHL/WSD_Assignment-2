function totalBill (){
    let subtotal = Number(document.getElementById("inputSub").value);
    let tipPercentage = Number(document.getElementById("inputTip").value);
    let tipAmount = (tipPercentage/100) * subtotal;
    let totalAmount = subtotal + tipAmount;
    
    return document.getElementById("output").innerHTML = `Your Subtotal: ${subtotal}<br>Your Tip Amount: ${tipAmount}<br>Your Total Amount: ${totalAmount}`;

}   
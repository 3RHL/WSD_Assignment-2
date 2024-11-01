function palindromeNum (){
    let num = Number(document.getElementById("input").value);
    let reversed = 0;
    let numeric = num;
    while(numeric > 0){
        let lastDigit = numeric % 10;
        reversed = reversed * 10 + lastDigit;
        numeric = Math.floor(numeric/10);
    }
    if(reversed === num){
        return document.getElementById("output").textContent = `The Number: ${num} is a Palindrome`;
    }
    else{
        return document.getElementById("output").textContent = `The Number: ${num} is Not a Palindrome`;
    }
    

}   
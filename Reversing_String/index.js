function reverseStr (){
    let str = document.getElementById("input").value;
    let reversed = "";
    for(let i = str.length-1; i>=0; i--){
        reversed += str[i];
    }
    return document.getElementById("output").textContent = "Reversed String: "+reversed;

}   
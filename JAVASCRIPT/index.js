// ASSIGNMENT 1 FUNCTIONS


function ftc(){
    let text = document.getElementById("tempInC")
    let fahrenheit = document.getElementById("fahrenheit").value
    let celsius = (fahrenheit-32)*(5/9)
    text.textContent = celsius + " C"
}

function ctf(){
    let text = document.getElementById("tempInF")
    let celsius = document.getElementById("celsius").value
    let fahrenheit = (celsius+32)*(9/5)
    text.textContent = fahrenheit + "F"
}

function mtf(){
    
}

function ftm(){

}

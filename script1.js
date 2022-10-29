

function ftc(){
    let text = document.getElementById("tempInC")
    let fahrenheit = document.getElementById("fahrenheit").value
    let celsius = (fahrenheit-32)*(5/9)
    text.textContent = celsius + " C"
}

function ctf(){
    let text = document.getElementById("tempInF")
    let celsius = document.getElementById("celsius").value
    let fahrenheit = (celsius*9/5)+32
    text.textContent = fahrenheit + " F"
}

function mtf(){
    let text = document.getElementById("measurementInFt")
    let meters = document.getElementById("meters").value
    let feet = meters*3.281
    text.textContent = feet + " ft"
}

function ftm(){
    let text = document.getElementById("measurementInMeters")
    let feet = document.getElementById("feet").value
    let meters = feet/3.281
    text.textContent = meters + " m"
}

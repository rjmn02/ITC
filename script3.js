function factorial(){
    let num = document.getElementById("integer").value
    let factorial = 1, i = 1
    while(i <= num) {
        factorial *= i
        i++
    }
    document.getElementById("factorial").textContent = "Factorial (n!): "+ factorial
}

function sum(){
    let num = document.getElementById("integer").value
    let sum = 0, i = 0
    do{
        sum += i
        i++
    }while(i<=num)
    document.getElementById("sum").textContent = " The sum of the first n numbers: " + sum
}

function average(){
    let num = document.getElementById("integer").value
    let sum = 0
    for (let i = 0; i <= num; i++) {
        sum += i
    }
    let average = sum/num
    document.getElementById("average").textContent = " The Average of the first n numbers: " + average

}

function calculate(){
    factorial()
    sum()
    average()
}

function compute(){
    let incomeTax
    let result = document.getElementById("result")
    let income = document.getElementById("income").value
    if(income < 250000){

        incomeTax = 0
        result.textContent = "INCOME TAX: PHP " + incomeTax 

    }else if(income > 250000 && income < 400000){

        incomeTax = (income-250000)*0.20
        result.textContent = "INCOME TAX: PHP " + incomeTax 

    }else if(income > 400000 && income < 800000){

        incomeTax = 30000+((income-400000)*0.25)
        result.textContent = "INCOME TAX: PHP " + incomeTax 

    }else if(income > 800000 && income < 2000000){

        incomeTax = 130000+((income-800000)*0.30)
        result.textContent = "INCOME TAX: PHP " + incomeTax 

    }else if(income > 2000000 && income < 8000000){
 
        incomeTax = 490000+((income-2000000)*0.32)
        result.textContent = "INCOME TAX: PHP " + incomeTax 

    }else if(income > 8000000){

        incomeTax = 2410000+((income-8000000)*0.35)
        result.textContent = "INCOME TAX: PHP " + incomeTax 

    }else{
        result.textContent = "Error"
    }
}

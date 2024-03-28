
function calculateLoan(){
    loanAmountValue =document.getElementById("loan-amount").value

   interestRateValue =document.getElementById("interest-rate").value
   
   monthPayValue =document.getElementById
   ("months-to-pay").value
   
   interest=(loanAmountValue * (interestRateValue * 0.01))
   /monthPayValue

   monthPayment =(loanAmountValue/monthPayValue + interest)
   .toFixed(2);
   document.getElementById("payment").innerHTML =
   `Monthly Payment : ${monthPayment}`

}
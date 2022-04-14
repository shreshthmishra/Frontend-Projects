const amount = document.querySelector("#amount");
const interest = document.querySelector("#interest");
const years = document.querySelector("#years");
const form = document.querySelector("#loan-form");
const monthPay = document.querySelector("#monthly-payment");
const totalPay = document.querySelector("#total-payment");
const loanInterest = document.querySelector("#total-interest");

form.addEventListener('submit', calculate);

function giveTotalInterest(a, b, c) {
  return (a * b * c) / 100;
}

function calculate(e) {
  let totalInterest = giveTotalInterest(amount.value, interest.value, years.value);
  let totalPayment = parseInt(totalInterest) + parseInt(amount.value);
  let monthlyPayment = totalPayment / (12 * years.value);
  monthPay.value = monthlyPayment;
  totalPay.value = totalPayment;
  loanInterest.value = totalInterest;
  e.preventDefault();
}
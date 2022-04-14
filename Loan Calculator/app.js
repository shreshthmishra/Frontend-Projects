const amount = document.querySelector("#amount");
const interest = document.querySelector("#interest");
const years = document.querySelector("#years");
const form = document.querySelector("#loan-form");
const monthPay = document.querySelector("#monthly-payment");
const totalPay = document.querySelector("#total-payment");
const loanInterest = document.querySelector("#total-interest");
const loading = document.querySelector("#loading");
const results = document.querySelector("#results");


form.addEventListener('submit', calculate);

function giveTotalInterest(a, b, c) {
  return (a * b * c) / 100;
}

function calculate(e) {
  loading.style.display = 'none';
  results.style.display = 'none';

  loading.style.display = 'block';
  setTimeout(loadRemove, 1000);
  function loadRemove() {
    loading.style.display = 'none';
  }
  let totalInterest = parseFloat(giveTotalInterest(amount.value, interest.value, years.value));
  let totalPayment = parseFloat(totalInterest) + parseInt(amount.value);
  let monthlyPayment = parseFloat(totalPayment / (12 * years.value));
  if (isFinite(monthlyPayment)) {
    monthPay.value = monthlyPayment.toFixed(2);
    totalPay.value = totalPayment.toFixed(2);
    loanInterest.value = totalInterest.toFixed(2);
    setTimeout(showResults, 1000);
    function showResults() {
      results.style.display = 'block';
    }
  } else {
    showError();
  }
  e.preventDefault();
}

function showError() {
  const div = document.createElement('div');
  div.className = 'alert alert-danger';
  div.innerText = "Please check your numbers";
  const heading = document.querySelector('.heading');
  const card = document.querySelector('.card');
  setTimeout(addAlert, 1000);
  function addAlert() {
    card.insertBefore(div, heading);
  }
  setTimeout(removeAlert, 3000);
  function removeAlert() {
    const err = document.querySelector('.alert');
    err.className = '';
    err.innerText = '';
  }
}
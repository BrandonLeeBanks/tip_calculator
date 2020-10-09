function calculateTip() {

    let billAmount = document.getElementById('bill-amount').value;
    let qualityOfService = document.getElementById('quality-of-service').value;
    let numberOfPeople = document.getElementById('number-of-people').value;


    const tipTotal = document.getElementById('tip-total');
    const error = document.getElementById('error-handling');
    const tip = document.getElementById('tip');
    const each = document.getElementById('each');

    // Error Handling
    if(billAmount === '' || billAmount <= 0){
        error.classList.add('showItem', 'error-text');
        error.innerHTML += `<p>Please enter an amount</p>`;
        tipTotal.innerHTML = '';
        
    }

    if(numberOfPeople === '') {
        error.classList.add('showItem', 'error-text');
        error.innerHTML += `<p>Number of people must be greater than 0</p>`
        tipTotal.innerHTML = '';
      
    } else if (numberOfPeople === '1'){
        each.style.display = 'none'
    } else {
        each.style.display = 'block';
    }

    if(qualityOfService === '0'){
        error.classList.add('showItem', 'error-text');
        error.innerHTML += `<p>Please rate the service</p>`;
        tipTotal.innerHTML = '';
    }

    setTimeout(function(){
        error.style.display = 'none';
        location.reload();
    }, 2000);
    

    // Calculating the tip
    let total = (billAmount * qualityOfService) / numberOfPeople;

    // Rounding off to 2 decimals
    total = Math.round(total * 100) / 100;

    // 2 Digits after Decimal
    total = total.toFixed(2);

    tipTotal.style.display = 'block';
    tip.innerHTML = total;


}

    // Hide on load
    tipTotal.style.display = 'block'
    each.style.display = 'block';



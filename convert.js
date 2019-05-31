function usdToEuro() {
    let usd = document.getElementById('usd').value;
    let rub = usd * 65.54;
    document.getElementById('rub').value = rub.toFixed(4);
}

function rubToUsd() {
    let rub = document.getElementById('rub').value;
    let usd = rub/65.54;
    document.getElementById('usd').value = usd.toFixed(4);
}

let usdVal = document.getElementById('usd');
let rubVal = document.getElementById('rub');

usdVal.addEventListener('keyup', usdToEuro);
rubVal.addEventListener('keyup', rubToUsd);
function storageCost(cost) {
    document.getElementById('storage-cost').innerText = cost;
    totalPriceUpdate();
}

function memoryCost(cost) {
    document.getElementById('memory-cost').innerText = cost;
    totalPriceUpdate();
}

function deliveryCost(cost) {
    document.getElementById('delivery-charge').innerText = cost;
    totalPriceUpdate();
}


function totalPriceUpdate() {
    let storageCost = document.getElementById('storage-cost').innerText;
    let memoryCost = document.getElementById('memory-cost').innerText;
    let deliveryCost = document.getElementById('delivery-charge').innerText;

    // calculate all price
    let totalPrice = parseInt(storageCost) + parseInt(memoryCost) + parseInt(deliveryCost);
    document.getElementById('total-cost').innerText = 1299 + totalPrice;
    document.getElementById('final-price').innerText = 1299 + totalPrice



}


// apply valid promo code


document.getElementById('promo-code').addEventListener('keyup', function () {

    let promoCode = document.getElementById('promo-code').value;
    console.log(promoCode);
    if (promoCode === "stevekaku") {
        document.getElementById('apply-promo').removeAttribute('disabled');

    } else {
        document.getElementById('apply-promo').disabled = true;
    }


})


document.getElementById('apply-promo').addEventListener('click', applyPromo);


function applyPromo() {
    console.log("clicked");
    let promoCode = document.getElementById('promo-code').value;
    if (promoCode === "stevekaku") {
        let finalPrice = parseInt(document.getElementById('final-price').innerText);
        let updateFinalPrice = finalPrice * 0.8;
        document.getElementById('final-price').innerText = updateFinalPrice;
        document.getElementById('apply-promo').disabled = true;
        document.getElementById('promo-code').value = '';

    }
}
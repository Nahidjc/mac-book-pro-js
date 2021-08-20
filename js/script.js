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


document.getElementById('apply-promo').addEventListener('click', function () {
    let promoCode = document.getElementById('promo-code').value;
    console.log(promoCode);
})
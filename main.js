
let temperature = [36.5, 36.6, 36.4, 36.3, 37.5, 37.7, 37.8, 39.0, 39.5, 38.8]
const button = document.querySelector('.btn')
const printTemperature = document.querySelector('.print-temp')


function sayTemperature() {
    let randomItem = temperature[Math.floor(Math.random() * temperature.length)];
    let message  = 'Ваша температура: ' + randomItem
    // alert(message);
    printTemperature.innerHTML = randomItem;
}


button.addEventListener('click', function () {
    setTimeout(sayTemperature, 3000);
})



let temperature = 0
const button = document.querySelector('.btn')


function sayTemperature() {
    let message  = 'Ваша температура: ' + temperature
    alert(message);
}


button.addEventListener('click', function () {
    sayTemperature();
})


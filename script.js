const celsiusInput = document.getElementById('celsius');
const fahrenheitInput = document.getElementById('fahrenheit');

celsiusInput.addEventListener('input', updateFahrenheit);
fahrenheitInput.addEventListener('input', updateCelsius);

function updateFahrenheit() {
    const celsius = parseFloat(celsiusInput.value);
    const fahrenheit = (celsius * 9/5) + 32;
    fahrenheitInput.value = isNaN(fahrenheit) ? '' : fahrenheit.toFixed(2);
}

function updateCelsius() {
    const fahrenheit = parseFloat(fahrenheitInput.value);
    const celsius = (fahrenheit - 32) * 5/9;
    celsiusInput.value = isNaN(celsius) ? '' : celsius.toFixed(2);
}

function convertTemperature() {
    const inputTemp = document.getElementById('inputTemp').value;
    const inputUnit = document.getElementById('inputUnit').value;
    const output = document.getElementById('output');

    if (isNaN(inputTemp) || inputTemp === '') {
        output.textContent = 'Please enter a valid number';
        return;
    }

    let convertedTemp;
    if (inputUnit === 'Celsius') {
        convertedTemp = (inputTemp * 9/5) + 32;
        output.textContent = `${inputTemp} °C is ${convertedTemp.toFixed(2)} °F`;
    } else {
        convertedTemp = (inputTemp - 32) * 5/9;
        output.textContent = `${inputTemp} °F is ${convertedTemp.toFixed(2)} °C`;
    }
}

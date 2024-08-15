const form = document.getElementById("form");
const input = document.getElementById("inp");
const result = document.getElementById("result");
const selectTempInput = document.getElementById("temp");
const selectTempOutput = document.getElementById("temp1");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    try {
        const inputTemp = parseFloat(input.value);
        let outputTemp;

        const inputUnit = selectTempInput.value;
        const outputUnit = selectTempOutput.value;

        if (inputUnit === outputUnit) {
            outputTemp = inputTemp;
        } else if (inputUnit === "C" && outputUnit === "F") {
            outputTemp = (inputTemp * 9) / 5 + 32;
        } else if (inputUnit === "F" && outputUnit === "C") {
            outputTemp = (inputTemp - 32) * 5 / 9;
        } else if (inputUnit === "C" && outputUnit === "K") {
            outputTemp = inputTemp + 273.15;
        } else if (inputUnit === "K" && outputUnit === "C") {
            outputTemp = inputTemp - 273.15;
        } else if (inputUnit === "F" && outputUnit === "K") {
            outputTemp = (inputTemp - 32) * 5 / 9 + 273.15;
        } else if (inputUnit === "K" && outputUnit === "F") {
            outputTemp = (inputTemp - 273.15) * 9 / 5 + 32;
        } else {
            result.innerText = "Invalid conversion";
            return;
        }

        result.innerText = `Converted Temperature: ${outputTemp.toFixed(2)}`;
    } catch (error) {
        console.log(error);
        result.innerText = "An error occurred";
    }

    form.reset();
});

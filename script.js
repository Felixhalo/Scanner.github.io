// script.js

document.getElementById('generate-button').addEventListener('click', function() {
    const textInput = document.getElementById('text-input').value;
    if (textInput) {
        JsBarcode("#barcode", textInput, {
            format: "CODE128", // You can change the format to other types like "EAN", "UPC", etc.
            lineColor: "#0aa",
            width: 4,
            height: 40,
            displayValue: true
        });
    } else {
        alert("Please enter some text to generate a barcode.");
    }
});

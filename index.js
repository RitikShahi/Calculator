function updateDisplay(value) {
    const fieldData = document.getElementById("field_data");

    if (value === 'AC') {
        fieldData.value = ""; 
    } else if (value === 'DE') {
        fieldData.value = fieldData.value.slice(0, -1); 
    } else if (value === '=') {
        try {
            fieldData.value = eval(fieldData.value); 
        } catch {
            fieldData.value = "Error"; 
        }
    } else {
        fieldData.value += value;
    }
}
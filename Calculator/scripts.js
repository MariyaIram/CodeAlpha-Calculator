let memory = 0;  // This stores the memory value

function appendNumber(number) {
    const resultField = document.getElementById('result');
    resultField.value += number;
}

function appendOperator(operator) {
    const resultField = document.getElementById('result');
    // Prevent multiple operators in a row
    const lastChar = resultField.value.slice(-1);
    if (['+', '-', '*', '/'].includes(lastChar) && ['+', '-', '*', '/'].includes(operator)) {
        return;  // Do not allow multiple operators
    }
    resultField.value += operator;
}

function clearDisplay() {
    document.getElementById('result').value = '';
}

function deleteLast() {
    const resultField = document.getElementById('result');
    resultField.value = resultField.value.slice(0, -1);
}

function calculate() {
    const resultField = document.getElementById('result');
    try {
        const result = eval(resultField.value);
        // Add the calculation to history
        addToHistory(resultField.value + ' = ' + result);
        resultField.value = result;
    } catch (error) {
        resultField.value = 'Error';
    }
}

function calculatePercentage() {
    const resultField = document.getElementById('result');
    if (resultField.value) {
        const result = eval(resultField.value) / 100;
        resultField.value = result;
    }
}

function calculateSquareRoot() {
    const resultField = document.getElementById('result');
    if (resultField.value) {
        const result = Math.sqrt(eval(resultField.value));
        // Add the calculation to history
        addToHistory('√' + resultField.value + ' = ' + result);
        resultField.value = result;
    }
}

function memoryAdd() {
    const resultField = document.getElementById('result');
    if (resultField.value) {
        memory += parseFloat(resultField.value);  // Add the current value to memory
        resultField.value = '';  // Clear the display after adding to memory
    }
}

function memorySubtract() {
    const resultField = document.getElementById('result');
    if (resultField.value) {
        memory -= parseFloat(resultField.value);  // Subtract the current value from memory
        resultField.value = '';  // Clear the display after subtracting from memory
    }
}

function memoryRecall() {
    const resultField = document.getElementById('result');
    resultField.value = memory;  // Display the current memory value
}

function memoryClear() {
    memory = 0;  // Clear the memory
    document.getElementById('result').value = '';  // Clear the display
}

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const themeLabel = document.getElementById('theme-label');
    themeLabel.textContent = document.body.classList.contains('dark-mode') ? 'Dark Mode' : 'Light Mode';
}

function addToHistory(entry) {
    const historyList = document.getElementById('history-list');
    const listItem = document.createElement('li');
    listItem.textContent = entry;  // Add the calculation result to the history
    historyList.appendChild(listItem);
}

function checkVowels() {
    const inputText = document.getElementById('inputText').value.toLowerCase();
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const foundVowels = [];

    for (let char of inputText) {
        if (vowels.includes(char) && !foundVowels.includes(char)) {
            foundVowels.push(char);
        }
    }

    const resultDiv = document.getElementById('result');
    if (foundVowels.length > 0) {
        resultDiv.innerHTML = `Found vowels: <strong>${foundVowels.join(', ')}</strong>`;
    } else {
        resultDiv.innerHTML = "No vowels found.";
    }
}

function clearText() {
    document.getElementById('inputText').value = '';
    document.getElementById('result').innerHTML = '';
}

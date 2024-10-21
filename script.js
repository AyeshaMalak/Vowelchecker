document.getElementById('checkBtn').addEventListener('click', function() {
    const letter = document.getElementById('letter').value.toLowerCase();
    const resultDiv = document.getElementById('result');

    if (letter.length !== 1 || !/^[a-zA-Z]$/.test(letter)) {
        resultDiv.innerText = "Please enter a valid letter.";
        resultDiv.style.color = "red";
        return;
    }

    const vowels = ['a', 'e', 'i', 'o', 'u'];
    
    if (vowels.includes(letter)) {
        resultDiv.innerText = `${letter.toUpperCase()} is a vowel.`;
        resultDiv.style.color = "green";
    } else {
        resultDiv.innerText = `${letter.toUpperCase()} is a consonant.`;
        resultDiv.style.color = "blue";
    }
});

const expandButton = document.getElementById('expand-button');
const whiteBox = document.getElementById('white-box');

expandButton.addEventListener('click', () => {
    expandButton.classList.toggle('expanded');
});

whiteBox.addEventListener('click', (e) => {
    e.stopPropagation();
});

document.getElementById('results-button').addEventListener('click', () => {
    const answers = document.querySelectorAll('input[type="radio"]:checked');
    let correctAnswers = 0;
    answers.forEach((answer) => {
        if (answer.value === 'c') {
            correctAnswers++;
        }
    });
    const resultText = `Has obtenido ${correctAnswers} respuestas correctas de ${answers.length}`;
    document.getElementById('result-box').textContent = resultText;
});
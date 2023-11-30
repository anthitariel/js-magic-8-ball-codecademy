// Magic Eight Ball 
// https://www.codecademy.com/courses/introduction-to-javascript/projects/magic-eight-ball-1

const magicBallElement = document.getElementById('magic-ball-result');
const questionElement = document.getElementById('question');
const resultElement = document.getElementById('magic-ball-result');
const userQuestionElement = document.getElementById('user-question');

magicBallElement.addEventListener('click', resetMagicBall);

function getPrediction() {
    const userQuestion = questionElement.value.trim();
    if (!userQuestion) {
        resultElement.innerText = 'Ah, it seems the magic is waiting for your question to weave its spell. Please enter a question, and let the enchantment begin!';
        userQuestionElement.innerText = '';
        magicBallElement.classList.remove('reset');
    } else {
        const randomNumber = Math.floor(Math.random() * 8);
        const answers = ['It is certain', 'It is decidedly so', 'Reply hazy try again', 'Cannot predict now', 'Do not count on it', 'My sources say no', 'Outlook not so good', 'Signs point to yes'];
        userQuestionElement.innerText = `If you are really interested in "${userQuestion}" here is my answer for you below. Click on the magic ball if you want to ask another question.`;
        resultElement.innerText = answers[randomNumber];
        magicBallElement.classList.add('reset');
    }
}

function resetMagicBall() {
    resultElement.innerText = '';
    userQuestionElement.innerText = '';
    magicBallElement.classList.remove('reset');
    questionElement.value = '';
}

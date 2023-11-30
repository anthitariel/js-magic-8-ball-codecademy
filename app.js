// Magic Eight Ball 
// https://www.codecademy.com/courses/introduction-to-javascript/projects/magic-eight-ball-1

const magicBallElement = document.getElementById('magic-ball-result');
const questionElement = document.getElementById('question');
const resultElement = document.getElementById('magic-ball-result');
const userQuestionElement = document.getElementById('user-question');
const magicWaitingText = 'Ah, it seems the magic is waiting for your question to weave its spell. Please enter a question, and let the enchantment begin!';

magicBallElement.addEventListener('click', resetMagicBall);

function getPrediction() {
    const userQuestion = questionElement.value.trim();
    if (!userQuestion) {
        resultElement.innerText = magicWaitingText;
        userQuestionElement.innerText = '';
        magicBallElement.classList.remove('reset', 'show-number');
    } else {
        const randomNumber = Math.floor(Math.random() * 8);
        const answers = ['It is certain', 'It is decidedly so', 'Without a doubt', 'Yes definitely', 'You may rely on it', 'As I see it, yes', 'Most likely', 'Outlook good', 'Yes', 'Signs point to yes', 'Reply hazy, try again', 'Ask again later', 'Better not tell you now', 'Cannot predict now', 'Concentrate and ask again', 'Don\'t count on it', 'My reply is no', 'My sources say no', 'Outlook not so good', 'Very doubtful'];
        const magicBallResult = answers[randomNumber];
        userQuestionElement.innerText = `If you are really interested in "${userQuestion}" here is my answer for you below. Click on the magic ball if you want to ask another question.`;
        resultElement.innerText = magicBallResult;
        if (magicBallResult === magicWaitingText) {
            magicBallElement.classList.remove('show-number');
        } else {
            magicBallElement.classList.add('show-number');
        }
        magicBallElement.classList.add('reset');
    }
}

function resetMagicBall() {
    resultElement.innerText = '';
    userQuestionElement.innerText = '';
    magicBallElement.classList.remove('reset');
    questionElement.value = '';
}

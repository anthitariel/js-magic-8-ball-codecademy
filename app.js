/* Magic Eight Ball 
https://www.codecademy.com/courses/introduction-to-javascript/projects/magic-eight-ball-1
*/

let userName = '';
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');
const userQuestion = 'Will I become a superstar tonight?';
console.log(userQuestion);
const randomNumber = Math.floor(Math.random() * 8);


// my solution 

const answers = ['It is certain', 'It is decidedly so','Reply hazy try again','Cannot predict now','Do not count on it','My sources say no','Outlook not so good','Signs point to yes']
console.log(answers[randomNumber]);

  
/*
switch (randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;  
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break; 
  case 4:
    eightBall = 'Do not count on it';
    break; 
  case 5:
    eightBall = 'My sources say no';
    break; 
  case 6:
    eightBall = 'Reply hazy try again';
    break; 
  case 7:
    eightBall = 'Outlook not so good';
    break; 
  case 8:
    eightBall = 'Signs point to yes';
    break; 
  // additional cases...
}
*/

// console.log(`The eight ball answered: ${eightBall}`)

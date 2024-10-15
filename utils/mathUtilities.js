/**
 *
 *
 * @returns {Object}
 */
function getQuestion() {
    const operations = ["+", "-", "*", "/"];
    const operation = operations[Math.floor(Math.random() * operations.length)];
    let num1, num2, answer;
  
    switch (operation) {
      case "+":
        num1 = Math.floor(Math.random() * 100);
        num2 = Math.floor(Math.random() * 100);
        answer = num1 + num2;
        break;
      case "-":
        num1 = Math.floor(Math.random() * 100);
        num2 = Math.floor(Math.random() * num1);
        answer = num1 - num2;
        break;
      case "*":
        num1 = Math.floor(Math.random() * 12) + 1;
        num2 = Math.floor(Math.random() * 12) + 1;
        answer = num1 * num2;
        break;
      case "/":
        num2 = Math.floor(Math.random() * 11) + 2; 
        answer = Math.floor(Math.random() * 12) + 1;
        num1 = num2 * answer;
        break;
    }
  
    return {
      question: `What is ${num1} ${operation} ${num2}?`,
      answer: answer.toString(),
    };
  }
  
  /**
   * @param {string} question 
   * @param {string} answer 
   * @returns {boolean} 
   */
  function isCorrectAnswer(question, answer) {
    const parts = question.match(/What is (\d+) ([\+\-\*\/]) (\d+)\?/);
    if (!parts) return false;
  
    const [, num1, operation, num2] = parts;
    let correctAnswer;
  
    switch (operation) {
      case "+":
        correctAnswer = parseInt(num1) + parseInt(num2);
        break;
      case "-":
        correctAnswer = parseInt(num1) - parseInt(num2);
        break;
      case "*":
        correctAnswer = parseInt(num1) * parseInt(num2);
        break;
      case "/":
        correctAnswer = parseInt(num1) / parseInt(num2);
        break;
      default:
        return false;
    }
  
    const cleanedAnswer = answer.toString().toLowerCase().trim();
    return (
      cleanedAnswer === correctAnswer.toString() ||
      cleanedAnswer === numberToWord(correctAnswer)
    );
  }
  
  function numberToWord(num) {
    const words = [
      "zero",
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
      "ten",
      "eleven",
      "twelve",
      "thirteen",
      "fourteen",
      "fifteen",
      "sixteen",
      "seventeen",
      "eighteen",
      "nineteen",
      "twenty",
    ];
    return num >= 0 && num <= 20 ? words[num] : num.toString();
  }
  
  module.exports = {
    getQuestion,
    isCorrectAnswer,
  };
class Question {
  constructor(question, answer, possibleAnswers) {
    this.question = question;
    this.answer = answer;
    this.possibleAnswers = possibleAnswers;

    this.id = question + "_" + answer;
  }

  isRightAnswer(answer) {
    return (
      this.answer.toLowerCase().trim() === this.answer.toLowerCase().trim()
    );
  }
}

module.exports = { Question };

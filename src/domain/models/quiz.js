const { flattenArray, shuffleArray } = require("../utils/utility_functions");

class Quiz {
  constructor(programmingLanguages, additionalQuestions) {
    Object.assign(this, { programmingLanguages, additionalQuestions });
  }

  generateQuestions(num) {
    const programmingQuestions = flattenArray(
      this.programmingLanguages.map((p) => p.generateQuestions())
    );

    return shuffleArray([
      ...programmingQuestions,
      ...this.additionalQuestions,
    ]).slice(0, num);
  }
}

module.exports = { Quiz };

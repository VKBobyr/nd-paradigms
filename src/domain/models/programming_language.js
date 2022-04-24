const { Question } = require("./question");

class ProgrammingLanguage {
  constructor({
    pictureUrl,
    name,
    typedStronglyWeakly,
    declarativeImperative,
    staticDynamic,
    additionalQuestions = [],
    numLikes = 0,
  }) {
    Object.assign(this, {
      pictureUrl,
      name,
      typedStronglyWeakly,
      declarativeImperative,
      staticDynamic,
      additionalQuestions,
      numLikes,
    });
  }

  generateQuestions() {
    return [
      new Question(
        `Is ${this.name} strongly or weakly typed?`,
        this.typedStronglyWeakly,
        [qTypedStrongly, qTypedWeakly]
      ),
      new Question(
        `Is ${this.name} declarative or imperative?`,
        this.declarativeImperative,
        [qDeclarative, qImperative]
      ),
      new Question(`Is ${this.name} static or dynamic?`, this.staticDynamic, [
        qStatic,
        qDynamic,
      ]),

      ...this.additionalQuestions,
    ];
  }
}

const qTypedStrongly = "strongly";
const qTypedWeakly = "weakly";
const qDeclarative = "declarative";
const qImperative = "imperative";
const qStatic = "static";
const qDynamic = "dynamic";

module.exports = {
  qTypedStrongly,
  qTypedWeakly,
  qDeclarative,
  qImperative,
  qStatic,
  qDynamic,
  ProgrammingLanguage,
};

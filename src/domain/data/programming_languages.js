const { ProgrammingLanguage } = require("../models/programming_language");
const fs = require("fs").promises;

// const languages = [
//   new ProgrammingLanguage({
//     pictureUrl:
//       "https://cdn.iconscout.com/icon/free/png-128/javascript-2752148-2284965.png",
//     name: "JavaScript",
//     typedStronglyWeakly: "weakly",
//     declarativeImperative: "imperative",
//     staticDynamic: "dynamic",
//   }),
//   new ProgrammingLanguage({
//     pictureUrl:
//       "https://cdn.iconscout.com/icon/free/png-128/python-2-226051.png",
//     name: "Python",
//     typedStronglyWeakly: "strongly",
//     declarativeImperative: "imperative",
//     staticDynamic: "dynamic",
//   }),
//   new ProgrammingLanguage({
//     pictureUrl:
//       "https://cdn.iconscout.com/icon/free/png-128/coffeescript-2-1175056.png",
//     name: "CoffeeScript",
//     typedStronglyWeakly: "weakly",
//     declarativeImperative: "imperative",
//     staticDynamic: "dynamic",
//   }),
//   new ProgrammingLanguage({
//     pictureUrl:
//       "https://cdn.iconscout.com/icon/free/png-128/typescript-3521774-2945272.png",
//     name: "TypeScript",
//     typedStronglyWeakly: "strongly",
//     declarativeImperative: "imperative",
//     staticDynamic: "static",
//   }),
//   new ProgrammingLanguage({
//     pictureUrl:
//       "https://cdn.iconscout.com/icon/free/png-128/ruby-47-1175102.png",
//     name: "Ruby",
//     typedStronglyWeakly: "strongly",
//     declarativeImperative: "imperative",
//     staticDynamic: "dynamic",
//   }),
//   new ProgrammingLanguage({
//     pictureUrl:
//       "https://cdn.iconscout.com/icon/free/png-128/clojure-2752222-2285039.png",
//     name: "Clojure",
//     typedStronglyWeakly: "strongly",
//     declarativeImperative: "declarative",
//     staticDynamic: "dynamic",
//   }),
//   new ProgrammingLanguage({
//     pictureUrl:
//       "https://cdn.iconscout.com/icon/free/png-128/java-60-1174953.png",
//     name: "Java",
//     typedStronglyWeakly: "strongly",
//     declarativeImperative: "imperative",
//     staticDynamic: "static",
//   }),
// ];

function getLanguageByName(languages, name) {
  return languages.filter((lang) => lang.name === name)[0];
}

const jsonPath = "src/domain/data/languages.json";

async function saveLanguages(languages) {
  const data = JSON.stringify(languages);
  await fs.writeFile(jsonPath, data);
}

async function readLanguages() {
  const fileContent = await fs.readFile(jsonPath, "utf8");
  return JSON.parse(fileContent).map((l) => new ProgrammingLanguage(l));
}

module.exports = { getLanguageByName, saveLanguages, readLanguages };

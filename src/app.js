const express = require("express");
const path = require("path");
const {
  getLanguageByName,
  readLanguages,
  saveLanguages,
} = require("./domain/data/programming_languages");
const { Quiz } = require("./domain/models/quiz");
const { shuffleArray } = require("./domain/utils/utility_functions");

const app = express();
app.set("views", path.join(__dirname, "presentation"));
app.set("view engine", "pug");

app.get("/", async (req, res) => {
  res.render("index", { languages: await readLanguages() });
});

app.get("/quiz", async (req, res) => {
  const languages = await readLanguages();
  const quiz = new Quiz(languages, []);
  res.render("quiz", { languages, quiz });
});

app.get("/:language", async (req, res) => {
  const selectedLanguageName = req.params.language;
  const languages = await readLanguages();
  const selectedLanguage = getLanguageByName(languages, selectedLanguageName);
  if (selectedLanguage === undefined) return res.redirect("/");

  res.render("language", {
    languages,
    selectedLanguage,
  });
});

app.post("/:language/likes", async (req, res) => {
  const selectedLanguageName = req.params.language;
  const languages = await readLanguages();
  const selectedLanguage = getLanguageByName(languages, selectedLanguageName);
  if (selectedLanguage === undefined) return res.redirect("/");

  selectedLanguage.numLikes = selectedLanguage.numLikes + 1;
  const newLanguages = languages.map((l) =>
    l.name === selectedLanguage.name ? selectedLanguage : l
  );
  await saveLanguages(newLanguages);
  res.send(selectedLanguage);
});

app.listen(3001, "localhost", () => {
  console.log("Server started on port 3001");
});

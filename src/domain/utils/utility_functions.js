function flattenArray(array, out = []) {
  array.forEach((v) => (Array.isArray(v) ? flattenArray(v, out) : out.push(v)));

  return out;
}

function shuffleArray(array) {
  return array.sort(() => (Math.random() > 0.5 ? -1 : 1));
}

module.exports = {
  flattenArray,
  shuffleArray,
};

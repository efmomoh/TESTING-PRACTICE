const capitalized = "winners";
const firstChar = capitalize(capitalized);

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
console.log(`Capitalize first character: ${firstChar[0]}`);

module.exports = capitalize;

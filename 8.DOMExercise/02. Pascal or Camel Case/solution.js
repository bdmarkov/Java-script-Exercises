function solve() {
  let input = document.getElementById("text").value;
  let currentCase = document.getElementById("naming-convention").value;

  let result = '';
  let words = text.split(/(\s+)/).filter(x => x != ' ')

  if (currentCase == "Camel Case") {
for (let index = 0; index < words.length; index++) {
    words[index] = words[index].toLowerCase()
  }
} else if (currentCase == "Pascal Case") {

} else {
  return document.getElementById('result').textContent = "Error!";
}



}
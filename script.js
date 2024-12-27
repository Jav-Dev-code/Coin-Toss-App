function tossCoin() {
  const resultElement = document.getElementById("result");
  const tossResult = Math.random() < 0.5 ? "Heads" : "Tails";
  resultElement.textContent = "Result: " + tossResult;
}

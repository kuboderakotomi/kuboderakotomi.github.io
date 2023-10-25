const outputDiv = document.getElementById("outputDiv");
const addCircleButton = document.getElementById("addCircleButton");
const addCrossButton = document.getElementById("addCrossButton");

addCircleButton.addEventListener("click", function() {
  outputDiv.textContent += "○";
});

addCrossButton.addEventListener("click", function() {
  outputDiv.textContent += "×";
});
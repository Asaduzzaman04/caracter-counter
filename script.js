const inpText = document.getElementById("textfield");

inpText.addEventListener("keyup", () => {
  display();
});

const display = () => {
  // ======> count-display-catch <===== \\
  const displayCount = document.getElementById("countDisplay");
  displayCount.innerText = inpText.value.length;
};

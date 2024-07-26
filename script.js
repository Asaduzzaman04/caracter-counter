const inpText = document.getElementById("textfield");

inpText.addEventListener("keyup", () => {
  display();
});

const display = () => {
  // ======> count-display-catch <===== \\
  const displayCount = document.getElementById("countDisplay");

  displayCount.innerText =  inpText.value.length;

//   =====> remaining-caracter <===== \\
const displayRemain = document.getElementById("remainig-remaing");

const maxlength = inpText.getAttribute('maxlength'); 

displayRemain.innerText = maxlength - inpText.value.length;
};

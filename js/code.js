//Get dom elements
const input = document.querySelector('.converter__input');
//Get DOM elements for outputs
const outputM = document.querySelector('.outputM');
const outputKm = document.querySelector('.outputKm');
const outputMil = document.querySelector('.outputMil');
const outputY = document.querySelector('.outputY');

//tommorow
//const outputDiv = document.querySelector('.converter__container');
//outputDiv.style.display = "none";

input.addEventListener('input',(e) => {
  let lbs = e.target.value;
  
  outputM.innerHTML = lbs * 1 + " meters";
  outputKm.innerHTML = lbs / 1000 + " kilometer(s)";
  outputMil.innerHTML = lbs / 1600 + " mile(s)";
  outputY.innerHTML = lbs * 1.0936133 + "yard(s)";

  //tommorow
  // outputDiv.style.display = "block";
});


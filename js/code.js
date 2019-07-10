//Get dom elements
const input = document.querySelector('.converter__input');

const outputM = document.querySelector('.display__m');
const outputKm = document.querySelector('.display__km');
const outputMil = document.querySelector('.display__mil');
const outputY = document.querySelector('.display__y');

input.addEventListener('input',function(e){
  let lbs = e.target.value;
  
  outputM.innerHTML = lbs * 1 + " meters";
  outputKm.innerHTML = lbs / 1000 + " kilometer(s)";
  outputMil.innerHTML = Math.floor(lbs/1600) + " mile(s)";
  outputY.innerHTML = lbs * 1.0936133 + "yard(s)";

})
//Get dom elements
const input = document.querySelector('.converter__input');
//Get DOM elements for outputs
const outputM = document.querySelector('.outputM');
const outputKm = document.querySelector('.outputKm');
const outputMil = document.querySelector('.outputMil');
const outputY = document.querySelector('.outputY');


const outputDiv = document.querySelector('.converter__container');
outputDiv.style.display = "none";


input.addEventListener('input', (e) => {
  let lbs = e.target.value;

  outputM.innerHTML = lbs * 1 + " meters";
  outputKm.innerHTML = lbs / 1000 + " kilometer(s)";
  outputMil.innerHTML = (lbs / 1600).toFixed(3) + " mile(s)";

  //yards
  let yeardsScore = lbs * 1.0931;
  yeardsScore.toFixed(3);
  outputY.innerHTML = yeardsScore.toFixed(3) + " yard(s)";


  outputDiv.style.display = "block";
});

//clear-btn
const btn_clear = document.querySelector('.converter__btn').addEventListener('click', () => {
  input.value = '';
  outputDiv.style.display = 'none';
})

//backround color of selected unit//

const option = document.querySelector('.converter__options');
const unit = document.querySelector('#unit')


unit.addEventListener('change', (event) => {
  if (event.target.value === 'meters') {
    unit.style.background = "#007bff";
    unit.style.border = '3px solid rgb(191, 58, 115)';
    unit.style.transition = 'all .5s ease-in-out'
  }
  else if (event.target.value === 'kilometers') {
    unit.style.background = '#28a745'
    unit.style.transition = 'all .5s ease-in-out'
 
  }
  else if (event.target.value === 'miles') {
    unit.style.background = '#dc3545'
    unit.style.border = '3px solid #007bff'
    unit.style.transition = 'all .5s ease-in-out'
  }
  else {
    unit.style.background = '#ffc107'
    unit.style.transition = 'all .5s ease-in-out'
  }
});


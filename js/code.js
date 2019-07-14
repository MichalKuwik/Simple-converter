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

  outputM.innerHTML = lbs * 1 + " meter(s)";
  outputKm.innerHTML = lbs / 1000 + " kilometer(s)";
  outputMil.innerHTML = (lbs / 1600).toFixed(3) + " mile(s)";
  outputY.innerHTML = (lbs*1.0931).toFixed(3) + " yard(s)";


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
    unit.style.border = '3px solid #13457b';
    unit.style.transition = 'all .5s ease-in-out'  

    outputM.innerHTML = input.value*1+ ' meter(s)'; 
    outputKm.innerHTML = input.value/1000+' kilometer(s)' 
    outputMil.innerHTML = (input.value/1600).toFixed(3)+' mile(s)';
    outputY.innerHTML = (input.value*1.0931).toFixed(3) + " yard(s)";
  }

  else if (event.target.value === 'kilometers') {
    unit.style.background = '#28a745'
    unit.style.border = '3px solid #078624';
    unit.style.transition = 'all .5s ease-in-out'

    outputM.innerHTML = input.value*1000+ ' meter(s)';
    outputKm.innerHTML = input.value*1+ ' kilometer(s)';
    outputMil.innerHTML = (input.value*0.621371192).toFixed(3)+' mile(s)';
    outputY.innerHTML = (input.value*1093.6133).toFixed(3) + " yard(s)";
  }
  else if (event.target.value === 'miles') {
    unit.style.background = '#dc3545'
    unit.style.border = '3px solid #99101d'
    unit.style.transition = 'all .5s ease-in-out'

    outputM.innerHTML = (input.value*1609.344).toFixed(3)+ ' meter(s)';
    outputKm.innerHTML = (input.value*1.609344).toFixed(3)+ ' kilometer(s)';
    outputMil.innerHTML = (input.value*1).toFixed(3)+' mile(s)';
    outputY.innerHTML = input.value*1760 + " yard(s)";
  }
  else {
    unit.style.background = '#ffc107'
    unit.style.border = '3px solid #ceb25d'
    unit.style.transition = 'all .5s ease-in-out'

    outputM.innerHTML = (input.value*0.9144).toFixed(3)+ ' meter(s)';
    outputKm.innerHTML = (input.value*0.0009144).toFixed(3)+ ' kilometer(s)';
    outputMil.innerHTML = (input.value*0.000568181818).toFixed(3)+' mile(s)';
    outputY.innerHTML = input.value*1+ " yard(s)";
    
  }
});


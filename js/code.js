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
  
<<<<<<< HEAD
  outputM.innerHTML = lbs * 1 + " meters";
  outputKm.innerHTML = lbs / 1000 + " kilometer(s)";
  outputMil.innerHTML = lbs / 1600 + " mile(s)";
  outputY.innerHTML = lbs * 1.0936133 + "yard(s)";
=======
  outputM.innerHTML = Math.decimal((lbs * 1), 2) + " meters";
  outputKm.innerHTML = Math.decimal((lbs / 1000), 2) + " kilometer(s)";
  outputMil.innerHTML = Math.decimal((lbs/1600), 2) + " mile(s)";
  outputY.innerHTML = Math.decimal((lbs * 1.0936133), 2) + "yard(s)";
>>>>>>> 5f86779044d846a1e350f80520fe481e3b477abf

  //tommorow
  // outputDiv.style.display = "block";
});

// round function 

Math.decimal = function round (n ,k){
  let factor = Math.pow(10, k+1)
  n = Math.round(Math.round(n*factor)/10);
  return n/(factor/10);
}

// function which have to show converted values and hide when its empty not finished
function isEmpty(){
  const displayContainer = document.querySelector('.display__container');
  if(input.value == ""){
    displayContainer.style.display = 'none';
  }
  else{
    displayContainer.style.display = 'flex';
  }

}
isEmpty();
//Get dom elements
const input = document.querySelector('.converter__input');

const outputM = document.querySelector('.display__m');
const outputKm = document.querySelector('.display__km');
const outputMil = document.querySelector('.display__mil');
const outputY = document.querySelector('.display__y');

input.addEventListener('input',function(e){
  let lbs = e.target.value;
  
  outputM.innerHTML = Math.decimal((lbs * 1), 2) + " meters";
  outputKm.innerHTML = Math.decimal((lbs / 1000), 2) + " kilometer(s)";
  outputMil.innerHTML = Math.decimal((lbs/1600), 2) + " mile(s)";
  outputY.innerHTML = Math.decimal((lbs * 1.0936133), 2) + "yard(s)";

})

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
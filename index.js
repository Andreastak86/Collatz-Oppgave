console.log('The Collatz Conjecture');

//Variabler som henter elemeter fra HTML//
const testTallet = document.querySelector('#myBtn');
const inputTall = document.querySelector('#inputField');
const slettTallet = document.querySelector('#deleteBtn');

//Aktiv knapp som tar tallet fra inputfelt//
testTallet.addEventListener('click', handleInput);

//Funksjon for å skrive til html//
function handleInput() {
  let valgtTall = parseInt(inputTall.value);
  const tallArray = collatzFormodning(valgtTall);
  logTall(tallArray, valgtTall);
}

//Her er sjøvaste funksjonen som regner ut Collatz Conjecture//
function collatzFormodning(valgtTall) {
  let tallArray = [];
  while (valgtTall !== 1) {
    if (valgtTall % 2 == 0) {
      valgtTall = valgtTall / 2;
    } else {
      valgtTall = valgtTall * 3 + 1;
    }
    console.log(valgtTall);
    tallArray.push(valgtTall);
  }
  console.dir(tallArray);
  return tallArray;
}

//Her er funksjonen som logger ut tall fra konsoll til innerHTML//
function logTall(tallSomLogges, gammeltTall) {
  document.getElementById('test').innerHTML = gammeltTall;
  document.getElementById('tallrekke').innerHTML = tallSomLogges.length;
  document.getElementById('alleTall').innerHTML = tallSomLogges;
}

//Funskjon for å resette og tilbakestille inputfelt//
function clear() {
  document.getElementById('tallrekke').innerHTML = '';
  document.getElementById('test').innerHTML = '';
  document.getElementById('inputField').innerHTML = '';
}
slettTallet.addEventListener('click', clear);

const btn = document.getElementById('deleteBtn');

btn.addEventListener('click', function handleClick(event) {
  event.preventDefault();
  const testFelt = document.getElementById('inputField');
  console.log(testFelt.value);
  testFelt.value = '';
});

//Test for å finne ut om tallet er partall eller oddetall//
/*Dette var en liten funskjon jeg lagde for å skjekke om tallet
  var oddetall eller partall*/
/*



const oddeEllerPar = document.querySelector('#oddEven');
const testOddEven = document.querySelector('#oddBtn');
testOddEven.addEventListener('click', oddInput);

function oddInput() {
  let n = oddInput;
  let result = n % 2;
  function oddOrEven() {
    if (result === 0) {
      console.log('This number is even');
    } else if (result !== 0) {
      console.log('This number is odd');
      return n;
    }
  }
  oddOrEven();
}
function logoddEvenTall() {
  document.getElementById('oddResult').innerHTML = n;
}
*/

console.log("The Collatz Conjecture");

// Variabler for å hente HTML-elementer
const testTallet = document.querySelector("#myBtn");
const inputTall = document.querySelector("#inputField");
const slettTallet = document.querySelector("#deleteBtn");

// Hendelseslyttere
testTallet.addEventListener("click", handleInput);
slettTallet.addEventListener("click", clearInput);

// Funksjon for å håndtere input
function handleInput() {
    const valgtTall = parseInt(inputTall.value);

    // Feilhåndtering for ugyldig input
    if (isNaN(valgtTall) || valgtTall <= 0) {
        alert("Vennligst skriv inn et gyldig tall.");
        return;
    }

    const tallArray = collatzFormodning(valgtTall);
    logTall(tallArray, valgtTall);
}

// Funksjon som regner ut Collatz-formodningen
function collatzFormodning(valgtTall) {
    let tallArray = [valgtTall];
    while (valgtTall !== 1) {
        if (valgtTall % 2 === 0) {
            valgtTall = valgtTall / 2;
        } else {
            valgtTall = valgtTall * 3 + 1;
        }
        tallArray.push(valgtTall);
    }
    return tallArray;
}

// Funksjon for å logge tallene til HTML
function logTall(tallSomLogges, gammeltTall) {
    document.getElementById("test").textContent = gammeltTall;
    document.getElementById("tallrekke").textContent = tallSomLogges.length;
    document.getElementById("alleTall").textContent = tallSomLogges.join(", ");
}

// Funksjon for å tømme inputfelt og resultater
function clearInput() {
    document.getElementById("tallrekke").textContent = "";
    document.getElementById("test").textContent = "";
    document.getElementById("alleTall").textContent = "";
    inputTall.value = "";
}

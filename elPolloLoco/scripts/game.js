// global gesetzt
let canvas;
let world;
let keyboard = new Keyboard(); // Aufgerufen und direkter Zugriff mit der Variablen

// Hier rufen wir classWorld auf, damit wird die Mutter class World aktiviert
function init(){
    // Holt das Canvas-Element aus dem HTML
    canvas = document.getElementById("canvas");
    // Rufen neues Objekt auf und übergeben zwei Argumente mit
    world = new World(canvas, keyboard);
}

// Jedes Runterdrücken setzt true um bei der keyboard.class.js
window.addEventListener('keydown', (e) => {
    // Sprechen let keyboard direkt an und suchen aus Variablen und ändern sie entsprechend.
    if(e.keyCode === 39) {
        keyboard.RIGHT = true;
    }

    if(e.keyCode === 37) {
        keyboard.LEFT = true;
    }

    if(e.keyCode === 38) {
        keyboard.UP = true;
    }

    if(e.keyCode === 40) {
        keyboard.DOWN = true;
    }

    if(e.keyCode === 32) {
        keyboard.SPACE = true;
    }

    if(e.keyCode === 68) {
        keyboard.D = true;
    }
});

// Automatisch beim Aufhören des Drückens wird bei keyboard.class.js false umgesetzt.
window.addEventListener('keyup', (e) => {
    if(e.keyCode === 39) {
        keyboard.RIGHT = false;
    }

    if(e.keyCode === 37) {
        keyboard.LEFT = false;
    }

    if(e.keyCode === 38) {
        keyboard.UP = false;
    }

    if(e.keyCode === 40) {
        keyboard.DOWN = false;
    }

    if(e.keyCode === 32) {
        keyboard.SPACE = false;
    }

    if(e.keyCode === 68) {
        keyboard.D = false;
    }
});

// Man flexibel jede gloable Variable in der class nehmen
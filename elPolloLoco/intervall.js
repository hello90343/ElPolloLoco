let IntervallIds = [];
let i = 1;

function setStoppableInterval(fn, time) {
    // Jeder Intervall hat eine ID.
    // Jeder Interball wird durch diese Funktion 
    // definiert, wodurch wir von externen 
    // Funktionen die Argumente erhalten.
    // Durch die Übergabe einer Funktion(was ausführen) und der Zeit(wie oft ausführen) wird 
    // automatisch ein Intervall ausgeführt.
    let id = setInterval(fn, time);
    // Es wird die Intervall-ID zurückgegeben und in den Array gespeichert.
    IntervallIds.push(id);
}

// Übergabe der Argumente
setStoppableInterval(sayHello, 500);
setStoppableInterval(sayGoodbye, 500);

// Die IDs im Array werden ausgegeben und entsprechend 
// durch () gestoppt.
function stopGame() {
    IntervallIds.forEach(clearInterval);
}

function sayHello() {
    console.log('Hallo', i);
    i++
}

function sayGoodbye() {
    console.log('Tschüss', i);
}


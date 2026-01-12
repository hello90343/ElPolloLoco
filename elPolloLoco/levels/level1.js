let level1;
function initLevel() {
    // Beim Btn-Klick soll level1 aufgerufen werden.
}
// Diese Variable ist global, entsprechend kann man es überall ansprechen lassen.
// new Level wird nur einmal aufgerufen unter level1
// Die Argumente werden hier weiterübergeben (Teil1)
// Die erste Instanz, die erstellt wird, ist level1.

let chickenArr = [
    new Chicken(),
    new Chicken(),
    new Chicken(),
    new Chicken(),
    new Chicken()
];

level1 = new Level([
    // Ausgabe der Chicken-Datei
    ...chickenArr,
],
[
    new Endboss()
],
[
    // Ausgabe der Cloud-Datei
    new Cloud()
],
[
    // Übergabe des Bildes an die Class, die weiter an addObjctsToMap geleitet wird.
    // Alle Eigeschaften, der Objekte
    // sind hier enthalten
    new BackgroundObject('imgs/5_background/layers/air.png', -719),
    new BackgroundObject('imgs/5_background/layers/3_third_layer/2.png', -719),
    new BackgroundObject('imgs/5_background/layers/2_second_layer/2.png', -719),
    new BackgroundObject('imgs/5_background/layers/1_first_layer/1.png', -719),

    new BackgroundObject('imgs/5_background/layers/air.png', 0),
    new BackgroundObject('imgs/5_background/layers/3_third_layer/1.png', 0),
    new BackgroundObject('imgs/5_background/layers/2_second_layer/1.png', 0),
    new BackgroundObject('imgs/5_background/layers/1_first_layer/2.png', 0),

    new BackgroundObject('imgs/5_background/layers/air.png', 719),
    new BackgroundObject('imgs/5_background/layers/3_third_layer/2.png', 719),
    new BackgroundObject('imgs/5_background/layers/2_second_layer/2.png', 719),
    new BackgroundObject('imgs/5_background/layers/1_first_layer/1.png', 719),

    new BackgroundObject('imgs/5_background/layers/air.png', 719*2),
    new BackgroundObject('imgs/5_background/layers/3_third_layer/1.png', 719*2),
    new BackgroundObject('imgs/5_background/layers/2_second_layer/1.png', 719*2),
    new BackgroundObject('imgs/5_background/layers/1_first_layer/2.png', 719*2),

    new BackgroundObject('imgs/5_background/layers/air.png', 719*3),
    new BackgroundObject('imgs/5_background/layers/3_third_layer/2.png', 719*3),
    new BackgroundObject('imgs/5_background/layers/2_second_layer/2.png', 719*3),
    new BackgroundObject('imgs/5_background/layers/1_first_layer/1.png', 719*3),


],
[
    new Coins(),
    new Coins(),
    new Coins(),
    new Coins(),
    new Coins()
],
[
    new SmallChickenBottle(),
    new SmallChickenBottle(),
    new SmallChickenBottle(),
    new SmallChickenBottle(),
    new SmallChickenBottle()
 ]);                             
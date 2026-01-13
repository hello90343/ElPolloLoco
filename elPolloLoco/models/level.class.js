class Level {
    // Variablen zur Übersicht und nicht global
    // Das ist die Funktion, wo die Argumente übergeben 
    // werden (Teil1) und von hier werden die 
    // unterschiedlichen Instanzen erstellt. 
    // Die erste Instanz, die erstellt wird, ist level1.
    enemies;
    clouds;
    backgroundObjects;
    coints;
    chickenBottle;
    level_end_x = 2200;
    // Es werden hier die Argumente weitergeleitet und beim Aufruf durch level1
    constructor(enemies, clouds, backgroundObjects, coints, chickenBottle) {
        this.enemies = enemies;
        this.clouds = clouds; 
        this.backgroundObjects = backgroundObjects;
        this.coints = coints;
        this.chickenBottle = chickenBottle;
    }
}

// Jede Instanz speichert ihre eigenen Daten beim Erstellen.

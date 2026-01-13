// Es werden die Properties weitergegeben, aber nicht 
// automatisch die Methoden aufgerufen.
class MovableObject extends DrawableObject {
    // Alle Standard-Werte, die übergeben werden.
    speed = 0.15; 
    otherDirection = false; // Richtung des Bildes des Charakters
    speedY = 0; // Startwert, dann geht nur noch in die negative Y
    acceleration = 2.5; // Negativ Startwert durch acceleration
    lastHit = 0;
    deadStatus = true;
    jumpHigh = 20;

    energy = 100;
    energyEndboss = 100;

    collectionCoints = 0;
    lastHitCoints = 0;

    collectionBottle = 0;
    lastHitBottle = 0;

    lastHitEndboss = 0;


    // Für den Sprung gedacht appyGravity()
    applyGravity(){
        setInterval(() => {
            // Nicht unter 180 y
            // this.speedY > 0, dadurch kann man springen
            if(this.isAboveGround() || this.speedY > 0) {
                // Soweit runtersetzten bis 180 y erreicht ist
                // Hier ersteht der Wurf
                // Und geht irgendwann bei einer bestimmten Frame negativ
                this.y /* character */ -= this.speedY /* Je Aufruf speedY/30 hoch */; // Je Aufruf 30/speedY nach oben
                // Hier wird nur für den Quellcode der speedY verändert
                this.speedY -= this.acceleration; // Negativ Steigerung 2.5
                // (Frame1) Aufruf speedY/30 - acceleration/2.5 = 27.5
                // (Frame2) Aufruf speedY/27.5 - acceleration/2.5 = 25
                //  Dann fällt, da acceleration fester positiver Wert ist
                // und speedY in die negative Zahl sich nach jedem Frame umwandelt
                // (Frame17) Aufruf speedY/-2 - acceleration/2.5 = -4
/*1     |  30   ↑ 
 2     |  28   ↑
 3     |  26   ↑
 4     |  24   ↑
 5     |  22   ↑
 6     |  20   ↑
 7     |  18   ↑
 8     |  16   ↑
 9     |  14   ↑
10     |  12   ↑
11     |  10   ↑
12     |   8   ↑
13     |   6   ↑
14     |   4   ↑
15     |   2   ↑
16     |   0   ← PEAK Höchster Punkt
17     |  -2   ↓
18     |  -4   ↓
19     |  -6   ↓
20     |  -8   ↓
21     | -10   ↓
22     | -12   ↓
23     | -14   ↓
24     | -16   ↓
25     | -18   ↓
26     | -20   ↓
27     | -22   ↓
28     | -24   ↓
29     | -26   ↓
30     | -28   ↓
31     | -30   ↓ */
            } 
            
        }, 1000 / 25);
    }

    // -----------------------------------------------------

    // Unters 180 nicht mehr applyGravity()
   isAboveGround() {
    // Wenn es keine Instanz von der ThrowableObject ist
    // Flasche fällt unten durch
    if(this instanceof ThrowableObject) {
        return true;
    } else {
        // Gebe zurück, y ist kleiner als 180
        return this.y < 180;
    }
}

// -----------------------------------------------------

    // character.isCollding(chicken), this
    // mo ist jedes Element Chicken, dass in world aufgerufen wird
    isColliding(mo) {
        // [Character] this.x (links oben Bild) + this.width (Breite des Bildes) > [Chicken] mo.x (links oben Bild)
        // Position der Objekte werden hier gemessen
        // this.x + this.width (Vordere Seite des Charakters)
        // mo.x (Vordere Seite des Chickens)
        // Wenn beide mit der vorderen Seite treffen, dann wird eine Action ausgelöst
               return this.x + this.width > mo.x &&
               // Wenn die grösse vom Character grösser ist, also bei Chicken
               this.y + this.height > mo.y &&
               // Hintere Seite vom Charakter wird angesprochen
               this.x < mo.x &&
               // Wenn Chicken von der Grösse, grösser ist als der Character
               this.y < mo.y + mo.height;
    }

    // -----------------------------------------------------

headColliding(chicken) {
  const charBottom = this.y + this.height;
  const charLeft   = this.x;
  const charRight  = this.x + this.width;

  const chickTop   = chicken.y;
  const chickHeadBottom = chicken.y + chicken.height ;
  const chickLeft  = chicken.x;
  const chickRight = chicken.x + chicken.width;

  return (
    // Character kommt von oben (fällt)
    this.speedY < 0 &&

    // Unterkante Character berührt Kopfbereich Chicken
    charBottom >= chickTop &&
    charBottom <= chickHeadBottom &&

    // JEDE horizontale Überlappung zählt
    charRight > chickLeft &&
    charLeft < chickRight
  );
}

// -----------------------------------------------------


    // Wenn zusammenprall mit den Chicken/enemy, dann Abzug der 
    // energy und lastHit erhält neuen Wert für isHurt()/Methode
    // hit() gehört zur Methode isHurt()
    // hit() wird durch checkCollision() aufgerufen, 
    // dann wird die Zeit gespeichert
    hit() {
        this.energy -= 5;
        if(this.energy < 0) {
            this.energy = 0;
        } else {
            //  Sie speichert den aktuellen Zeitpunkt (jetzt) als Zahl in Millisekunden
            // und legt ihn in der Objekt-Variable lastHit ab.
      /*    lastHit beginnt genau in dem Moment,
            in dem hit() aufgerufen wird. */
           this.lastHit = new Date().getTime();
           // new Date() => Erzeugt ein Date-Objekt mit dem aktuellen Datum und der aktuellen Uhrzeit.
           // Fri Jan 02 2026 14:32:10 GMT+0100
           // getTime() => Anzahl der Millisekunden seit dem 01.01.1970 (Unix-Zeit)
           // 1767364330123
        }
    }


    // isHurt(), isDead() => gehören zu energy und lösen die 
    // entsprechenden Animationen des Character aus, wenn ein bestimmt 
    // Wert bei energy besteht.
    // Hier wird durch die 1 aufgelöst, dass unsere Animation Hurt nur eine Sekunde angezeigt wird.
    isHurt() {
    // Aktuelle Zeit (in Millisekunden) - Zeitpunkt des letzten Treffers
    // ergibt: wie viel Zeit seit dem letzten Hit vergangen ist
    // timepassed wird jedes Mal neu erzeugt, wenn isHurt() aufgerufen wird.
          /*    timepassed beginnt genau in dem Moment,
            in dem class Character.animate aufgerufen wird. */
            // jetzt − Zeitpunkt des letzten Treffers
    let timepassed = new Date().getTime() - this.lastHit;

    // Umrechnung von Millisekunden in Sekunden
    timepassed = timepassed / 1000;

    // Gibt true zurück, wenn der letzte Treffer weniger als 1 Sekunde her ist
    // das Objekt gilt noch als "verletzt"
    // Hurt-Animation zeigen
    // Wenn true, dann wird die Animation bei class 
    // Character.animate() angezeigt.
    /*  Man braucht die Differenz timepassed,
    weil man wissen will, wie lange etwas her ist – nicht wann es war. */
    return timepassed < 1; // true oder false
    // true, solange der Treffer weniger als 1 Sekunde her ist
   /*  Solange isHurt() true ist, läuft die Hurt-Animation.
    Änderst du 1 auf 10, bleibt true 10 Sekunden → Animation läuft 10 Sekunden.
   */ }

    isDead() {
        return this.energy == 0;
    }

    // -----------------------------------------------------

    moveRight() {
       // Vorfährts
       this.x += this.speed;
       // Änderung des Bildes Richtung (rechts Augenblick)
    }

    // Wird aufgerufen bei den ganzen Figuren
    moveLeft() {
            this.x -= this.speed;
            // Änderung des Bildes Richtung (links Augenblick)
    }

    jump() {
       this.speedY = 30;
    }

    // Die Bilder wiederholen sich
    playAnimation(images) {
                  // Walk-Animation
                  let i = this.currentImage % images.length; // let i = 5 % 6; => 0, Rest 5, weil die 5 nicht in die 6 reinpasst
                  // i = 0, 1, 2, 3, 4, 5, 0, 0, 1, 2, 3, 4, 5, 0, 0, 1, 2, 3, 4, 5, 0, ...
                  // Wenn 6 === 6 = 0 -> 0 weitergeleitet an this.IMAGES_WALKING[0]; 
                  let path = images[i]; // Welche Index im Array
                  this.img = this.imageCache[path]; // Bild mit key aus dem Cache geholt
                  this.currentImage++; 
}

// -----------------------------------------------------

    hitCoint() {
        this.collectionCoints += 21;
        if(this.collectionCoints > 100) {
            this.collectionCoints = 100;
        } else {
            this.lastHitCoints = new Date().getTime();
        }
    }

    isHurtCoint() {
        let timepassedCoint = new Date().getTime() - this.lastHitCoints;
        timepassedCoint = timepassedCoint / 1000;
        return timepassedCoint < 1;
    }

    isDeadCoint() {
        return this.collectionCoints == 0;
    }

    //---------------------------------------------

    hitChickenBottle() {
        this.collectionBottle += 21;
        if(this.collectionBottle > 100) {
            this.collectionBottle = 100;
        } else {
            this.lastHitBottle = new Date().getTime();
        }
    }

    isHurtChickenBottle() {
        let timepassedChickenBottle = new Date().getTime() - this.lastHitBottle;
        timepassedChickenBottle = timepassedChickenBottle / 1000;
        return timepassedChickenBottle < 1;
    }

    isDeadChickenBottle() {
        return this.collectionBottle == 0;
    }

    //---------------------------------------------

        hitEndboss() {
        this.energyEndboss -= 21;
        if(this.energyEndboss < 0) {
            this.energyEndboss = 0;
        } else {
           this.lastHitEndboss = new Date().getTime();
        }
    }

       isHurtEndboss() {
       let timepassedEndboss = new Date().getTime() - this.lastHitEndboss;
       timepassedEndboss = timepassedEndboss / 1000;
       return timepassedEndboss < 1; 
    }

       isDeadEndboss() {
        return this.energyEndboss == 0;
    }


}

/* let world = new World(canvas);
class World {
    character = new Character();
}
class MovableObject {
    imageCache = [];
} */
// world.character.imageCache

/* (0,0)
●──────────────────────────────▶ x
│
│
│
│
│
│
│
▼ y */

/* y = 80        ← Kopf / obere Kante
│
│   (250 px Höhe)
│
y = 330       ← Füße / Boden */

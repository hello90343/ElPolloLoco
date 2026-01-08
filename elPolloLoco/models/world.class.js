class World {

// Ist nicht im Array drine, da es nur einmal aufgerufen wird.
// Wir rufen die class Character auf und haben mit der Variable Zugriff auf die Variablen
character = new Character();

// Wir deklarieren hier, weil es für diese Seite für die Übersicht 
// ist und wir es nicht von der anderen Seite entnehmen müssen, 
// wodurch wir den Überblick verlieren würden, wenn die die Variable 
// auf einer anderen Seite enthalten sein würde.
level = level1; // level1 wird nur einmal aufgerufen

// Zur Übersicht
canvas;
ctx;
keyboard;
 // camera_x = 0;  global (wie static, aber falsch)
 // static camera_x = 0;  Klassenwert
 // this.camera_x = 0;  Objektwert 
camera_x = 0;
statusBar = new StatusBar(); // Statusbar aufrufen und verwenden als Variable
statusBarCoints = new StatusBarCoints();
oven = new Oven();
throwableObjects = [];
deadChicken = [];
deadCoints = [];

// An den constructor werden die Argumente abgegeben
constructor(canvas, keyboard) {
    this.ctx = canvas.getContext('2d'); // Werkzeuge
    this.canvas  = canvas; // canvas-html-tag
    this.keyboard = keyboard; // Keyboard class aufrufen und möglich Zugriff auf die Variablen
    this.draw(); // Methode innerhalb der class aufrufen
    this.setWorld(); // Methode innerhalb der class aufrufen
    this.run();
}

// also innerhalb der character class wird die world 
// variable durch setWorld verändert
setWorld() {
    // Variable wurde bei init() aufgerufen class World(erste Variable)
    this.character.world = this; // class World (Instanz)
}

run() {
    setInterval(() => {
        this.chickenBottleCollision()
        this.cointCollision();
        this.deadCollisionCoint();
        this.deadCollision();
        this.checkCollision();
        this.checkThrowObjects();
        // Jede 200 Sekunden wird geprüft, ob das Bild 
        // in der andere Bild enthalten ist
    }, 200);
}

checkThrowObjects() {
    if(this.keyboard.D) {
        // x = links vom Character + 100, y = Je höher die Zahl, desto tiefer
        let bottle = new ThrowableObject(this.character.x + 100, this.character.y + 100);
        // Beim Wurf einer Flasche wird ThrowableObject im Array gespeichert
        this.throwableObjects.push(bottle); 
    }
}

 checkCollision() {
         // Jeder Chicken wird angesprochen
         // Wenn eines der Chicken den Charakter trifft, dann Nachricht
         this.level.enemies.forEach((enemy) => {
             // An dieses Enemy wird die Methode angeheftet, 
             // die in character enthalten ist und diese soll in 
            // diesem Objekt (this) enthalten sein.
             // Wenn Chicken/enemy mit Character zusammenstossen, dann

         if(this.deadChicken.includes(enemy)) return;
         if(this./*Wenn diese Character kollidiert mit Chicken, dann*/character.isColliding(enemy)) {
                // Minus Energy, dann und speichert aktuellen Zeitpunkt
                // isHurt() ist die wahre Funktion von hit()
                this.character.hit();
                // this.character.energy kommt aus der Klasse MovableObject
                // und wird vom Character geerbt.
                // Statusbar erhält Prozent und aktuallisiert sich durch checkCollision
                this.statusBar.setPercentage(this.character.energy); // class Character und Variable energy
             }
         });
 } 

  deadCollision() {
    this.level.enemies.forEach((enemy) => {
        if(this.character.headColliding(enemy)) {
            enemy.speed = 0;
            enemy.flatChicken(true);
            setTimeout(() => {
                enemy.height = 0;
            }, 700);
            this.character.jump(); 
            this.deadChicken.push(enemy);
        }
    })
} 

cointCollision() {
    this.level.coints.forEach((coint) => {
        if(this.deadCoints.includes(coint)) return;
        if(this.character.isColliding(coint)) {
            coint.height = 0;
            this.character.hitCoint();
            this.statusBarCoints.setPercentageCoints(this.character.collectionCoints);
        }
    });
}

deadCollisionCoint() {
    this.level.coints.forEach((coint) => {
        if(this.character.isColliding(coint)) {
            this.deadCoints.push(coint);
        }
    })
}

chickenBottleCollision() {
    this.level.chickenBottle.forEach((cB) => {
        if(this.oven.isColliding(cB)) {
            cB.height = 0;
        }
    })
}

/* deadCollision() {
    this.level.enemies.forEach((enemy) => {

        if (this.deadChicken.includes(enemy)) return;

        if (this.character.headColliding(enemy)) {

            this.character.jump();

            // Dead-Animation anzeigen
            enemy.playAnimation(enemy.IMAGES_DEAD);

            // Nach 3 Sekunden Chicken "entfernen"
            setTimeout(() => {
                enemy.height = 0;
            }, 3000);

            this.deadChicken.push(enemy);
        }
    });
} */

    draw() {
        // Vorherige Zeichnung gelöscht
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        // ctx.translate(x, y);
        // translate verschiebt das Koordinatensystem.
        // Verschiebt immer um 1. Draw ruft sich mehrmals 
        // innerhalb einer Sekunde ab.
        this.ctx.translate(this.camera_x, 0); // Kamera bewegt sich

        // Also innerhalb der Instanz werden die Variable verwendet 
        // Bilder mit Eigenschaften an eine Funktion weitergeben
        // Background, Cloud, Chicken, Endboss
        this.addObjctsToMap(this.level.backgroundObjects);

        // Space for fixed Objects
        this.ctx.translate(-this.camera_x, 0); // Kamera zurücksetzten
        this.addToMap(this.statusBar); // Statusbar wird gezeichnet
        this.addToMap(this.statusBarCoints);
        this.ctx.translate(this.camera_x, 0); // Kamera wieder aktiv

        this.addToMap(this.oven);     

        this.addObjctsToMap(this.level.enemies);
        this.addObjctsToMap(this.level.chickenBottle);
        this.addObjctsToMap(this.level.coints);

        this.addToMap(this.character);
        this.addObjctsToMap(this.level.clouds);
        // enemies kommt aus der Level-Klasse und wird als 
        // Argument an addObjctsToMap übergeben.
        // Properties sind Variablen, die zu einem Objekt gehören.
/*      this  World
	 	level  Property von World
		enemies  Property von Level */
        this.addObjctsToMap(this.throwableObjects);

        this.ctx.translate(-this.camera_x, 0);
    
        // this gibt es bei rAF nicht, deshalb bilden 
        // wir eine Variable self und setzten es in die Funktion ein
        let self = this;
        // requestAnimationFrame (rAF) ist eine Browser-Funktion, die deine Zeichenfunktion immer wieder aufruft 
        // 60 Mal pro Sekunde
        requestAnimationFrame(function() {
            self.draw();
        });
    }

    // Jedes Element wird an addToMap ausgegeben, damit durch
    // drawImage das Bild angezeigt wird
    addObjctsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        })
    }

    // zeichnet ein Objekt auf das Canvas
    // Bild mit den Eigenschaften werden hinzugefügt und ausgegeben
    addToMap(mo) {
        if(mo.otherDirection) {
            this.flipImage(mo);
        }
        // Speichert den aktuellen Zustand des Canvas-Kontexts
            mo.draw(this.ctx);
            mo.drawFrame(this.ctx);
        // Ein Bild wird auf das Canvas gezeichnet.

        if(mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }

    // Rechts schaut und nach links will
    flipImage(mo) {
            // speichert den aktuellen Zustand des Canvas-Kontexts,
            // damit man ihn später exakt wiederherstellen kannst.
            this.ctx.save();
            // Wenn man zurück mit Character geht, dann flüssiger
            this.ctx.translate(mo.width, 0);
            // Spiegelt das Canvas horizontal
            this.ctx.scale(-1, 1);
            // * -1 kehrt das Vorzeichen von x um.
            // Das ist nötig, weil das Canvas mit 
            // scale(-1, 1) gespiegelt wird.
            mo.x = mo.x * -1;
    }

    // Links schaut und nach rechts will
    flipImageBack(mo) {
            // * -1 kehrt das Vorzeichen von x um.
            // Das ist nötig, weil das Canvas mit 
            // scale(-1, 1) gespiegelt wird.
            mo.x = mo.x * -1;
            // save() merken – restore() zurücksetzen.
            this.ctx.restore();
    }
}
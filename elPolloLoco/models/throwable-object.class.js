class ThrowableObject extends MovableObject {
    constructor(x, y) {
        super().loadImage('imgs/6_salsa_bottle/salsa_bottle.png'); // Das ist das Bild
        this.x = x; // Position des Bildes
        this.y = y; // Position des Bildes
        this.height = 60; // Grösse des Bildes
        this.width = 50; // Grösse des Bildes
        this.throw(); // Methode aufrufen
    }

    throw() {
        this.speedY = 30;
        this.applyGravity();
        setInterval(() => {
            this.x += 10;
        }, 25);
    }
}
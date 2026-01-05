// Aufgerufen alle in level1 
class BackgroundObject extends MovableObject {
    // Die Werte werden überschrieben
    width = 720; // wie groß es ist (width, height)
    height = 480; // wie groß es ist (width, height)
    constructor(imgagePath, x) {
        // Von movable-object.class.js wird die Methode gezogen
        super().loadImage(imgagePath);
        this.y = 480 - this.height; // wo ist es
        this.x = x; // wo ist es
    }
}
// Aufgerufen alle in level1 
class Cloud extends MovableObject {
    y = 30; // wo ist es
    height = 250; // wie groß es ist (width, height)
    width = 500; // wie groß es ist (width, height)

    constructor() {
        // Weiterleiten des Bildes an Methode von movable-object.class.js
        super().loadImage('imgs/5_background/layers/4_clouds/1.png');
        this.x = Math.random() * 500; // wo ist es
        this.animate();
    }
    animate() {
        this.moveLeft(); // Die Bewgung nach links
    }
}
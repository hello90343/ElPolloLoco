// Aufgerufen alle in level1 
class Chicken extends MovableObject {
       y = 360; // wo ist es
       height = 80; // wie groß es ist (width, height)
       width= 80; // wie groß es ist (width, height)
       // Bilder vom Chicken für die Animation
       IMAGES_WALKING = [
        'imgs/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'imgs/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'imgs/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
       ];


       // Durch den Aufruf im World, wird der constructor automatisch aufgerufen
       // Da MovableObject die obere Class ist, können wir von dort aus nur alle Metohde entnehmen.
       constructor() {
      // Argument wird weitergeleitet. Nur ein Bild
       super().loadImage('imgs/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
       // Array wird weitergeleitet, damit im anderen Array gespeichert. Für die Performance.
       this.loadImages(this.IMAGES_WALKING);

       // Zufällige Zahl, die die Position der Chicken aussucht
       this.x = 600 + Math.random() * 500;
       // Zufällige Zahl, die die Geschwindigkeit der Chicken aussucht
       this.speed = 0.15 + Math.random() * 3;
       // Automatisches Gehen der Chicken
       this.animate();
    }

animate() {
  let movingRight = false;

  setInterval(() => {
    if (this.x < 250) {
      movingRight = true;
    }

    if (this.x > 2800) {
      movingRight = false;
    }

    if(movingRight) {
      this.moveRight();
      this.otherDirection = true;
    } else {
      this.moveLeft();
      this.otherDirection = false;
    }

  }, 1000 / 60);

  setInterval(() => {
    this.playAnimation(this.IMAGES_WALKING);
  }, 500);
}
}
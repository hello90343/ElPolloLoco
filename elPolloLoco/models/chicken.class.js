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

       IMAGES_DEAD = [
        'imgs/3_enemies_chicken/chicken_normal/2_dead/dead.png'
       ];

       // Durch den Aufruf im World, wird der constructor automatisch aufgerufen
       // Da MovableObject die obere Class ist, können wir von dort aus nur alle Metohde entnehmen.
       constructor() {
      // Argument wird weitergeleitet. Nur ein Bild
       super().loadImage('imgs/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
       // Array wird weitergeleitet, damit im anderen Array gespeichert. Für die Performance.
       this.loadImages(this.IMAGES_WALKING);
       this.loadImages(this.IMAGES_DEAD);

       // Zufällige Zahl, die die Position der Chicken aussucht
       this.x =  500 + Math.random() * 1800;
       // Zufällige Zahl, die die Geschwindigkeit der Chicken aussucht
       this.speed = 0.15 + Math.random() * 1;
       // Automatisches Gehen der Chicken
       this.animate();
       this.flatChicken();
    }

animate() {
  let movingRight = false;
  // y 80
  // console.log(`${this.y} Chicken`);
  setInterval(() => {
    if (this.x < 400) {
      movingRight = true;
    }

    if (this.x > 2500) {
      movingRight = false;
    }

    if(movingRight) {
      this.moveRight();
      this.otherDirection = true;
    } else {
      this.moveLeft();
      this.otherDirection = false;
    }

  }), 5000 / 60;
}

flatChicken(boelean) {
  this.playAnimation(this.IMAGES_WALKING);
  setInterval(() => {
  if(boelean) {
    this.playAnimation(this.IMAGES_DEAD);
  }
}, 5000 / 60);
}
}
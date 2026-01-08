class SmallChickenBottle extends MovableObject {
    y = 380;
    height = 90;
    width = 60;

    IMAGES = [
        'imgs/3_enemies_chicken/w_1.svg',
        'imgs/3_enemies_chicken/w_2.svg',
        'imgs/3_enemies_chicken/w_3.svg'
    ];

    constructor() {
        super();
        this.loadImage('imgs/3_enemies_chicken/chicken_small/1_w.svg');
        this.loadImages(this.IMAGES);
        this.x =  500 + Math.random() * 1800;
        this.speed = 1;
        this.animate();
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
    this.playAnimation(this.IMAGES);

  }, 5000/60);
}
}
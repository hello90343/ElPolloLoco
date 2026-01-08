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
  setInterval(() => {
    this.moveLeft();
    this.playAnimation(this.IMAGES);

  }, 5000/60);
}
}
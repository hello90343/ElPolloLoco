// Aufgerufen alle in level1 
class Endboss extends MovableObject {
    height = 300; // wie groß es ist (width, height)
    width = 500; // wie groß es ist (width, height)
    y = 150; // wo ist es 

    IMAGES_WALKING = [
        'imgs/4_enemie_boss_chicken/1_walk/G1.png',
        'imgs/4_enemie_boss_chicken/1_walk/G2.png',
        'imgs/4_enemie_boss_chicken/1_walk/G3.png',
        'imgs/4_enemie_boss_chicken/1_walk/G4.png'
    ];

    constructor() {
        // Ein Bild laden
        super().loadImage(this.IMAGES_WALKING[0]);
        // Bilder laden -> mit Animation
        this.loadImages(this.IMAGES_WALKING);
        this.x = 2000; // wo ist es
        this.speed = 10;
        // this.animate(); // Methode Aufruf
        this.animate();
    }

    animate() {
        let i = 0;
        setInterval(() => {
            this.moveLeft();
            // wird benutzt, um die erste Animation zeitlich zu begrenzen.
            if(i < 10) {
                // 10 Intervall * 150 Milisekunden = 1,5 Sekunden
                // erste ~1,5 Sekunden → SPAWNING-Animation
                // this.playAnimation(this.IMAGES_SPARWING);
            } else {
                // danach dauerhaft → SWIMMING-Animation
                this.playAnimation(this.IMAGES_WALKING);
            }
            i++;
            
/*          Der Code zählt Zeit (i), spielt Animationen
            und triggert ein Ereignis bei einer bestimmten Position. */
            if(world.character.x > 2800) {
                i = 0;
            }
        }, 150);
   }
}
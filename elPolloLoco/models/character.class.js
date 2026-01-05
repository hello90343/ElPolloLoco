// Aufgerufen alle in level1 
class Character extends MovableObject {
    height = 250; // wie groß es ist (width, height)
    y = 80; // wo ist es
    speed = 40; // Geschwindigkeit des Characters
    IMAGES_WALKING = [
               'imgs/2_character_pepe/2_walk/W-21.png',
               'imgs/2_character_pepe/2_walk/W-22.png',
               'imgs/2_character_pepe/2_walk/W-23.png',
               'imgs/2_character_pepe/2_walk/W-24.png',
               'imgs/2_character_pepe/2_walk/W-25.png',
               'imgs/2_character_pepe/2_walk/W-26.png'
            ];



    IMAGES_JUMPING = [
                'imgs/2_character_pepe/3_jump/J-31.png',
                'imgs/2_character_pepe/3_jump/J-32.png',
                'imgs/2_character_pepe/3_jump/J-33.png',
                'imgs/2_character_pepe/3_jump/J-34.png',
                'imgs/2_character_pepe/3_jump/J-35.png',
                'imgs/2_character_pepe/3_jump/J-36.png',
                'imgs/2_character_pepe/3_jump/J-37.png',
                'imgs/2_character_pepe/3_jump/J-38.png',
                'imgs/2_character_pepe/3_jump/J-39.png',
            ];


    IMAGES_DEAD = [
        'imgs/2_character_pepe/5_dead/D-51.png',
        'imgs/2_character_pepe/5_dead/D-52.png',
        'imgs/2_character_pepe/5_dead/D-53.png',
        'imgs/2_character_pepe/5_dead/D-54.png',
        'imgs/2_character_pepe/5_dead/D-55.png',
        'imgs/2_character_pepe/5_dead/D-56.png',
        'imgs/2_character_pepe/5_dead/D-57.png'
    ];

    IMAGES_HURT = [
        'imgs/2_character_pepe/4_hurt/H-41.png',
        'imgs/2_character_pepe/4_hurt/H-42.png',
        'imgs/2_character_pepe/4_hurt/H-43.png'
    ];


            // Zur Übersicht rübergebracht
            // Bei der Verwendung innerhalb der Class übersichtlich zur Verwendung
            // Damit der Character auf die World zugreifen kann
            world;

            // lädt die Bilder im Voraus und speichert sie im Speicher (Cache)
    constructor() {
        // Von movable-object.class.js wird die Methode gezogen
        // Ein Bild wird geladen -> Ohne Animationen
        super().loadImage('imgs/2_character_pepe/2_walk/W-21.png');
        // Von movable-object.class.js wird die Methode gezogen
        // Mehrere Bilder werden geladen -> Mit Animationen
        this.loadImages(this.IMAGES_WALKING);
        // Von movable-object.class.js wird die Methode gezogen
        // Mehrere Bilder werden geladen -> Mit Animationen
        this.loadImages(this.IMAGES_JUMPING);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HURT);
        // Sprung bei movable.object.class.js
        this.applyGravity();
        // In dieser class wird die Methode aufgerufen und 
        // automatisch die Intervalle ausgeführt und jede 
        // Sekunden werden die Intervalle ausgelöst.
        this.animate();
    }

    animate() {

        // Rechts-Bewegung und Abstand ohne schwarzes Bild zu sehen
        // Links-Bewegung und Abstand ohne schwarzes Bild zu sehen
        setInterval(() => {

                  // Rechts Bewegung
                  if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                    this.moveRight();
                    this.otherDirection = false;
                  }

                  // Links Bewegung
                  if (this.world.keyboard.LEFT && this.x > 0) {
                    this.moveLeft();
                    this.otherDirection = true;
                  }
                  // this.ctx.translate(this.camera_x, 0); bei class World

                  // Sprung Bewegung
                 if(this.world.keyboard.SPACE && !this.isAboveGround()) {
                 this.jump();
                 }

                 // damit der Character der Kamera folgt und im Bild bleibt.
                  this.world.camera_x = -this.x + 100;
        }, 1000 / 60);

        // Bei playAnimation werden die Bilder immer gewechselt nach jedem Interval bei dieser Methode
        // Alles wird von movable-object.class.js gezogen
        setInterval( () => {
            // Wenn energy = 0, dann diese Animation
            if(this.isDead()) {
                this.playAnimation(this.IMAGES_DEAD)
                // 
            } else if(this.isHurt()) {
                this.playAnimation(this.IMAGES_HURT);
            } else if(this.isAboveGround()) {
                this.playAnimation(this.IMAGES_JUMPING);
            } else {
              if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                // Die Bilder wiederholen sich bei playAnimation
                // IMAGES_WALKING werden von der class weitergegeben
                this.playAnimation(this.IMAGES_WALKING);
              }
              }
        }, 50);
    }
      
}

/* 0
0 % 6 = 0
1
1 % 6 = 1
2
2 % 6 = 2
3
3 % 6 = 3
4
4 % 6 = 4
5
5 % 6 = 5
6
6 % 6 = 0  ← von vorne
7
7 % 6 = 1
8
8 % 6 = 2
9
9 % 6 = 3
10
10 % 6 = 4
11
11 % 6 = 5
12
12 % 6 = 0 ← von vorne
13
13 % 6 = 1
14
14 % 6 = 2
15
15 % 6 = 3
16
16 % 6 = 4
17
17 % 6 = 5
18
18 % 6 = 0 ← von vorne */
class StatusBar extends DrawableObject {
    IMAGES = [
        'imgs/7_statusbars/1_statusbar/2_statusbar_health/blue/0.png',
        'imgs/7_statusbars/1_statusbar/2_statusbar_health/blue/20.png',
        'imgs/7_statusbars/1_statusbar/2_statusbar_health/blue/40.png',
        'imgs/7_statusbars/1_statusbar/2_statusbar_health/blue/60.png',
        'imgs/7_statusbars/1_statusbar/2_statusbar_health/blue/80.png',
        'imgs/7_statusbars/1_statusbar/2_statusbar_health/blue/100.png',
    ];
    

    percentage = 100;

    constructor() {
        super(); // Mit super() kann man aus der obere class die Methoden innerhalb des constructors
        this.loadImages(this.IMAGES);
        this.x = 40; // x normal von links nach rechts
        this.y = 0; // y von oben nach unten
        this.width = 200; // Grösse der
        this.height = 60; // Grösse der Statusbar
        // energy fängt bei 100 an
        // Hier werden die passenden Statusbar Bilder angezeigt durch
        // isColliding(enemy) aufgerufen.
        this.setPercentage(100);
    }

    // setPercentage(50);
    // percentage = es wird die energy vom Character genommen
    // Hier werden die passenden Statusbar Bilder angezeigt
    setPercentage(percentage) {
        this.percentage = percentage; // => 0 ... 5
        // Index vom IMAGES wird durch resolveImageIndex() returnt
        let path = this.IMAGES[this.resolveImageIndex()];
        // Und das passende Bild bei img angezeigt
        // key gesetzt
        this.img = this.imageCache[path];
    }
        resolveImageIndex(){
            if(this.percentage == 100) {
                return 5;
            } else if (this.percentage > 80) {
                return 4;
            } else if (this.percentage > 60) {
                return 3;
            } else if (this.percentage > 40) {
                return 2;
            } else if(this.percentage > 20) {
                return 1;
            } else {
                return 0;
            }
    }
}
class StatusBarCoints extends DrawableObject {
    IMAGES = [
        'imgs/7_statusbars/1_statusbar/1_statusbar_coin/blue/0.png',
        'imgs/7_statusbars/1_statusbar/1_statusbar_coin/blue/20.png',
        'imgs/7_statusbars/1_statusbar/1_statusbar_coin/blue/40.png',
        'imgs/7_statusbars/1_statusbar/1_statusbar_coin/blue/60.png',
        'imgs/7_statusbars/1_statusbar/1_statusbar_coin/blue/80.png',
        'imgs/7_statusbars/1_statusbar/1_statusbar_coin/blue/100.png'
    ];

    // Wir haben 0 Punkte am Anfang
    percentageCoints = 0;

    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.x = 250;
        this.y = 0;
        this.width = 200;
        this.height = 60;
        // Wir rufen die Funktion am Anfang auf und übergeben ein Argument mit.
        this.setPercentageCoints(0);
    }

    setPercentageCoints(percentageCoints) {
        // Zuerst wir das Argument 0 übergeben
        this.percentageCoints = percentageCoints;
        // Es wird die Funktion angesprochen, um den richtigen Index herauszufinden.
        let path = this.IMAGES[this.resolveImageIndex()];
        // Im img wird der key/path hineingesetzt und im draw weitergeleitet
        this.img = this.imageCache[path];
    }

resolveImageIndex() {
    // Wenn 100 Punkte, dann Index 5 Bild zurückgeben
    if (this.percentageCoints == 100) return 5;
    if (this.percentageCoints > 80) return 4;
    if (this.percentageCoints > 60) return 3;
    if (this.percentageCoints > 40) return 2;
    if (this.percentageCoints > 20) return 1;
    return 0;
}

}
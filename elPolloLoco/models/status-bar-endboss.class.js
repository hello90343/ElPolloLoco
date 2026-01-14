class StatusBarEndboss extends DrawableObject{
    IMAGES = [
        'imgs/7_statusbars/2_statusbar_endboss/orange/orange0.png',
        'imgs/7_statusbars/2_statusbar_endboss/orange/orange20.png',
        'imgs/7_statusbars/2_statusbar_endboss/orange/orange40.png',
        'imgs/7_statusbars/2_statusbar_endboss/orange/orange60.png',
        'imgs/7_statusbars/2_statusbar_endboss/orange/orange80.png',
        'imgs/7_statusbars/2_statusbar_endboss/orange/orange100.png'
    ];

    perecentageEndboss = 100;

    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.x = 250;
        this.y = 65;
        this.width = 200;
        this.height = 60;
        this.setPercentageEndboss(100);
    }

    setPercentageEndboss(perecentageEndboss) {
        this.perecentageEndboss = perecentageEndboss;
        let path = this.IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

            resolveImageIndex(){
            if(this.perecentageEndboss == 100) {
                return 5;
            } else if (this.perecentageEndboss > 80) {
                return 4;
            } else if (this.perecentageEndboss > 60) {
                return 3;
            } else if (this.perecentageEndboss > 40) {
                return 2;
            } else if(this.perecentageEndboss > 20) {
                return 1;
            } else {
                return 0;
            }
    }
}
class StatusBarCoints extends DrawableObject {
    IMAGES = [
        'imgs/7_statusbars/1_statusbar/1_statusbar_coin/blue/0.png',
        'imgs/7_statusbars/1_statusbar/1_statusbar_coin/blue/20.png',
        'imgs/7_statusbars/1_statusbar/1_statusbar_coin/blue/40.png',
        'imgs/7_statusbars/1_statusbar/1_statusbar_coin/blue/60.png',
        'imgs/7_statusbars/1_statusbar/1_statusbar_coin/blue/80.png',
        'imgs/7_statusbars/1_statusbar/1_statusbar_coin/blue/100.png'
    ];

    percentageCoints = 0;

    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.x = 250;
        this.y = 0;
        this.width = 200;
        this.height = 60;
        this.setPercentageCoints(0);
    }

    setPercentageCoints(percentageCoints) {
        this.percentageCoints = percentageCoints;
        let path = this.IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    resolveImageIndex() {
        if(this.percentageCoints == 0) {
            return 0;
        } else if (this.percentageCoints > 20) {
            return 1;
        } else if (this.percentageCoints > 40) {
            return 2;
        } else if (this.percentageCoints > 60) {
            return 3;
        } else if (this.percentageCoints > 80) {
            return 4;
        } else {
            return 0;
        }
    }

}
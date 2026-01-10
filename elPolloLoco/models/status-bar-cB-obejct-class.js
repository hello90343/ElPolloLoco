class StatusBarChickenBottle extends DrawableObject{
    IMAGES = [
        'imgs/7_statusbars/1_statusbar/3_statusbar_bottle/green/0.png',
        'imgs/7_statusbars/1_statusbar/3_statusbar_bottle/green/20.png',
        'imgs/7_statusbars/1_statusbar/3_statusbar_bottle/green/40.png',
        'imgs/7_statusbars/1_statusbar/3_statusbar_bottle/green/60.png',
        'imgs/7_statusbars/1_statusbar/3_statusbar_bottle/green/80.png',
        'imgs/7_statusbars/1_statusbar/3_statusbar_bottle/green/100.png'
    ];

    percentageChickenBottle = 0;

    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.x = 450;
        this.y = 0;
        this.width = 200;
        this.height = 60;
        this.setPercentageChickenBottle(0);
    }

    setPercentageChickenBottle(percentageChickenBottle) {
        this.percentageChickenBottle = percentageChickenBottle;
        let path = this.IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    resolveImageIndex() {
          // Wenn 100 Punkte, dann Index 5 Bild zurückgeben
          if (this.percentageChickenBottle == 100) return 5;
          if (this.percentageChickenBottle > 80) return 4;
          if (this.percentageChickenBottle > 60) return 3;
          if (this.percentageChickenBottle > 40) return 2;
          if (this.percentageChickenBottle > 20) return 1;
          return 0;
    }
}
class Coins extends DrawableObject {
    IMAGES_COINS = [
        'imgs/8_coin/coin_2.png'
    ];
    constructor() {
        let random_number = 150;
        super();
        this.loadImages(this.IMAGES_COINS);
        this.x =  400 + Math.random() * 1800;
        this.y = 50 + Math.random() * 100;
        this.width = random_number;
        this.height = random_number;
        this.coinPosition();
    }

    coinPosition() {
        let path = this.IMAGES_COINS[0];
        this.img = this.imageCache[path];
    }
} 
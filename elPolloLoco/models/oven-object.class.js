class Oven extends MovableObject {
    IMAGE_OVEN = ['imgs/11_oven/oven.svg'];

    constructor() {
        super();
        this.loadImages(this.IMAGE_OVEN);
        this.x = 250;
        this.y = 350;
        this.width = 100;
        this.height = 100;
        this.loadPictures();
    }

    loadPictures() {
        let path = this.IMAGE_OVEN[0];
        this.img = this.imageCache[path];
    }
}

import kd from 'keydrown';

class Bullet {
    constructor(context, cW, cH, x, y) {
        this.x = x;
        this.y = y;
        this.width = 2;
        this.height = 25;
        this.radius = 100;
        this.color = 'red';
        this.context = context;
        this.cWidth = cW;
        this.cHeight = cH;
        this.xVel = 15;
        this.yVel = 15;
        this.init();
    }

    init() {
        this.draw();
    }

    draw() {
        this.context.beginPath();
        this.context.fillStyle = this.color;
        this.context.rect(this.x, this.y, this.width, this.height);
        this.context.fill();
    }

    update() {
        this.y -= this.yVel;
        this.draw();
    }
}

export default Bullet;
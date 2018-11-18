import Canvas from '../Canvas';

class Enemy {
    constructor(x, y, w, h, col, direction) {
        this.width = w;
        this.height = h;
        this.x = x;
        this.y = y;
        this.color = col;
        this.xVel = 3;
        this.yVel = 3;
        this.direction = direction;
        this.canvas = new Canvas();
        this.context = this.canvas.getContext('2d');
        this.draw();
    }

    remove() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    draw() {
        this.context.beginPath();
        this.context.fillStyle = this.color;
        this.context.rect(this.x, this.y, this.width, this.height);
        this.context.fill();
    }

    update() {
        this.x = this.direction === 1 ? this.x + this.xVel : this.x - this.xVel;
        if (this.x <= 0 || this.x > window.innerWidth - 20) {
            this.xVel = -this.xVel;
        }

        this.draw();
    }
}

export default Enemy;
import Canvas from '../../Canvas';

class Bullet {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.radius = 3;
        this.color = 'red';

        this.canvas = new Canvas();
        this.context = this.canvas.getContext('2d');
        this.draw();
    }

    draw() {
        this.context.beginPath();
        this.context.fillStyle = this.color;
        this.context.arc(this.x, this.y, this.radius, Math.PI * 2, 0, false);
        this.context.fill();
    }

    update() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        if (this.x > 0) {
            this.x -= 20;
        }
        this.draw();
    }
}

export default Bullet;
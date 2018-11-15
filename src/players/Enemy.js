import Canvas from '../Canvas';
import Bullet from './tools/Bullet';
import kd from 'keydrown';

class Enemy {
    constructor(y, w, h, col, b) {
        this.width = w;
        this.height = h;
        this.x = window.innerWidth - this.width;
        this.y = y;
        this.color = col;
        this.bullets = b;
        this.activeBullet = undefined;
        this.xVel = 3;
        this.yVel = 3;

        this.canvas = new Canvas();
        this.context = this.canvas.getContext('2d');
        this.draw();

        let shooter = setInterval(() => {
            if (this.activeBullet !== undefined && this.activeBullet.x > 0) {
                return;
            }
            if (this.bullets <= 0) {
                window.clearInterval(shooter);
                console.log('You are out of bullets');
                return;
            }
            this.bullets -= 1;
            this.activeBullet = new Bullet(this.x, this.y);
        }, 400);
    }

    draw() {
        this.context.beginPath();
        this.context.fillStyle = this.color;
        this.context.rect(this.x, this.y, this.width, this.height);
        this.context.fill();
    }

    update() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        if (this.activeBullet !== undefined) {
            this.activeBullet.update();
            if (this.activeBullet.x <= 0) {
                this.activeBullet = undefined;
            }
        }
        if (this.y <= 10 || this.y > window.innerHeight - 10) {
            this.yVel = -this.yVel;
        }
        this.y -= this.yVel;
        this.draw();
    }
}

export default Enemy;
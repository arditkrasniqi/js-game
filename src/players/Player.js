import Canvas from '../Canvas';
import kd from 'keydrown';
import Bullet from './tools/Bullet';

class Player {
    constructor(x, y, w, h, col, xvel, yvel) {
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.color = col;
        this.velocity = {
            x: xvel,
            y: yvel,
            oldX: xvel,
            oldY: yvel
        }
        this.shots = 0;
        this.xVel = xvel;
        this.yVel = yvel;
        this.bullets = [];
        this.bulletIndex = 0;
        this.bulletDirection = 'right';

        this.canvas = new Canvas();
        this.context = this.canvas.getContext('2d');
        this.init();
    }

    init() {
        this.draw();
        kd.RIGHT.down(() => {
            this.moveRight();
            this.bulletDirection = 'right';
        });
        kd.LEFT.down(() => {
            this.moveLeft();
            this.bulletDirection = 'left';
        });
        kd.UP.down(() => {
            if (this.y >= window.innerHeight / 2) {
                this.moveUp();
            }
        });
        kd.DOWN.down(() => {
            this.moveDown();
        });
        kd.SPACE.up(() => {
            // if (this.shots++ <= 10) {
            this.bullets[this.bulletIndex++] = new Bullet(this.context, this.canvas.width, this.canvas.height, this.x + (this.width / 2 - 1), this.y, this.bulletDirection);
            // }
        });
        kd.run(function () {
            kd.tick();
        });
    }

    draw() {
        this.context.beginPath();
        this.context.fillStyle = this.color;
        this.context.rect(this.x, this.y, this.width, this.height);
        this.context.fill();
    }

    moveRight() {
        if (this.x < this.canvas.width - this.width) {
            this.x += this.velocity.x;
        }
    }

    moveLeft() {
        if (this.x > 0) {
            this.x -= this.velocity.x;
        }
    }

    moveUp() {
        if (this.y > 0) {
            this.y -= this.velocity.y;
        }
    }

    moveDown() {
        if (this.y < this.canvas.height - this.height) {
            this.y += this.velocity.y;
        }
    }

    update() {
        if (this.bullets.length > 0) {
            this.bullets.forEach((bullet, index) => {
                if (bullet.y <= 0) {
                    this.bullets.splice(index, 1);
                }
                bullet.update();
            })
        }
        this.draw();
    }
}

export default Player;
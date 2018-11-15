import Canvas from '../Canvas';
import kd from 'keydrown';

class Player {
    constructor(x, y, w, h, col, xvel, yvel) {
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.color = col;
        this.xVel = xvel;
        this.yVel = yvel;

        this.canvas = new Canvas();
        this.context = this.canvas.getContext('2d');
        this.init();
    }

    init() {
        this.draw();
        kd.RIGHT.down(() => {
            this.moveRight();
        });
        kd.LEFT.down(() => {
            this.moveLeft();
        });
        kd.UP.down(() => {
            this.moveUp();
        });
        kd.DOWN.down(() => {
            this.moveDown();
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
            this.x += this.xVel;
        }
    }

    moveLeft() {
        if (this.x > 0) {
            this.x -= this.xVel;
        }
    }

    moveUp() {
        if (this.y > 0) {
            this.y -= this.yVel;
        }
    }

    moveDown() {
        if (this.y < this.canvas.height - this.height) {
            this.y += this.yVel;
        }
    }

    update() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.draw();
    }
}

export default Player;
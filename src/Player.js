import Canvas from './Canvas';
import Keyboard from './events/Keyboard';
import { runInThisContext } from 'vm';

class Player {
    constructor(width, height) {
        this.width = 15;
        this.height = 15;
        this.x = 20;
        this.y = 20;
        this.color = 'red';

        this.canvas = new Canvas();
        this.context = this.canvas.getContext('2d');
        this.init();
    }

    init() {
        this.draw();

        Keyboard.on('ArrowRight', () => {
            this.moveRight();
        });
        Keyboard.on('ArrowLeft', () => {
            this.moveLeft();
        });
        Keyboard.on('ArrowUp', () => {
            this.moveUp();
        });
        Keyboard.on('ArrowDown', () => {
            this.moveDown();
        });


        Keyboard.bind('ArrowUp-ArrowRight', () => {
            this.moveUp();
            this.moveRight();
        });
        Keyboard.bind('ArrowUp-ArrowLeft', () => {
            this.moveUp();
            this.moveLeft();
        });
        Keyboard.bind('ArrowDown-ArrowRight', () => {
            this.moveDown();
            this.moveRight();
        });
        Keyboard.bind('ArrowDown-ArrowLeft', () => {
            this.moveDown();
            this.moveLeft();
        });
    }

    draw() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.context.beginPath();
        this.context.fillStyle = this.color;
        this.context.rect(this.x, this.y, this.width, this.height);
        this.context.fill();
    }

    moveRight() {
        if (this.x < this.canvas.width - this.width) {
            this.x += 2;
            this.draw();
        }
    }

    moveLeft() {
        if (this.x > 0) {
            this.x -= 2;
            this.draw();
        }
    }

    moveUp() {
        if (this.y > 0) {
            this.y -= 2;
            this.draw();
        }
    }

    moveDown() {
        if (this.y < this.canvas.height - this.height) {
            this.y += 2;
            this.draw();
        }
    }
}

export default Player;
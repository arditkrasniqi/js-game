import Player from './players/Player';
import Enemy from './players/Enemy';
import Collision from './players/tools/Collision';
import Canvas from './Canvas';

const canvas = new Canvas();
const enemies = [];
const player = new Player(window.innerWidth / 2 - 10, window.innerHeight - 100, 20, 20, 'black', 5, 5);

for (let i = 0; i < 15; i++) {
    enemies[i] = new Enemy(Math.floor(Math.random() * window.innerWidth), Math.floor(Math.random() * window.innerHeight / 3), 20, 20, 'green', Math.round(Math.random()));
}

function animate() {
    requestAnimationFrame(animate);
    canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
    player.update();
    enemies.forEach((enemy, index) => {
        if (player.bullets.length > 0) {
            player.bullets.forEach((bullet, bulletIndex) => {
                if (Collision.hitBox(bullet, enemy)) {
                    enemies.splice(index, 1);
                    player.bullets.splice(bulletIndex, 1);
                }
            });
        }
        enemy.update();
    });
}
animate();
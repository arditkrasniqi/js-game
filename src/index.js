import Player from './players/Player';
import Enemy from './players/Enemy';
// import Bullet from './players/tools/Bullet';

const enemies = [];
const player = new Player(200, 200, 20, 20, 'black', 5, 5);

for (let i = 0; i < 10; i++) {
    enemies[i] = new Enemy(Math.floor(Math.random() * window.innerHeight), 20, 20, 'green', 10);
}

function animate() {
    requestAnimationFrame(animate);
    player.update();
    // bullet.update();
    enemies.forEach(enemy => {
        enemy.update();
    });
}
animate();
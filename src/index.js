import Player from './players/Player';
const player = new Player(200, 200, 20, 20, 'black', 5, 5);
player.update();

function animate() {
    requestAnimationFrame(animate);
    player.update();
}
animate();
class Collision {
    static hitBox(source, target) {
        /* Source and target objects contain x, y and width, height */
        return !(
            ((source.y + source.height) < (target.y)) ||
            (source.y > (target.y + target.height)) ||
            ((source.x + source.width) < target.x) ||
            (source.x > (target.x + target.width))
        );
    }
}
export default Collision;
class Canvas {
    constructor() {
        let canvas = document.createElement('canvas');
        document.body.appendChild(canvas);
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        return canvas;
    }
}

export default Canvas;
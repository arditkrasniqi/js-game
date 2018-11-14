class Canvas {
    constructor() {
        let canvas = document.createElement('canvas');
        document.body.appendChild(canvas);
        return canvas;
    }
}

export default Canvas;
class Keyboard {
    static on(key, callback) {
        document.addEventListener('keydown', function (event) {
            if (key !== event.key) {
                document.removeEventListener('keydown', () => { }, false);
                return false;
            }
            callback();
        });
    }

    static bind(k, callback) {
        let keysArray = k.split('-');
        let activeKeys = [];

        document.addEventListener('keydown', (event) => {
            let valid = true;
            if (activeKeys.indexOf(event.key) == -1) {
                activeKeys.push(event.key);
            }
            if (activeKeys.length > 1) {
                for (let i = 0; i < activeKeys.length; i++) {
                    if (keysArray.indexOf(activeKeys[i]) == -1) {
                        valid = false;
                    }
                }
                if (valid) {
                    callback();
                }
            }
        });
        document.addEventListener('keyup', (event) => {
            activeKeys.splice(activeKeys.indexOf(event.key), 1);
        });
    }
}
export default Keyboard;
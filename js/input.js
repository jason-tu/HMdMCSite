(function() {
    var pressedKeys = {};

    function setKey(event, status) {
        var code = event.keyCode;
        var key;

        switch(code) {
        case 65: // A
            key = 'LEFT'; break;
        case 68: // D
            key = 'RIGHT'; break;
        case 83: // S
            key = 'DOWN'; break;
        case 87: // W
            key = 'JUMP'; break;
        case 16: // Left Shift
            key = 'RUN'; break;

        case 37: // Left Arrow
            key = 'LEFT'; break;
        case 38: // Up Arrow
            key = 'JUMP'; break;
        case 39: // Right Arrow
            key = 'RIGHT'; break;
        case 40: // Down Arrow
            key = 'DOWN'; break;

        case 32: // Space
            key = 'JUMP'; break;
        case 90: // Z
            key = 'RUN'; break;
        default:
            key = String.fromCharCode(code);
        }

        pressedKeys[key] = status;
    }

    document.addEventListener('keydown', function(e) {
        setKey(e, true);
    });

    document.addEventListener('keyup', function(e) {
        setKey(e, false);
    });

    window.addEventListener('blur', function() {
        pressedKeys = {};
    });

    window.input = {
        isDown: function(key) {
            return pressedKeys[key.toUpperCase()];
        },
        reset: function() {
          pressedKeys['RUN'] = false;
          pressedKeys['LEFT'] = false;
          pressedKeys['RIGHT'] = false;
          pressedKeys['DOWN'] = false;
          pressedKeys['JUMP'] = false;
        }
    };
})();

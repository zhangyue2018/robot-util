var robot = require('robotjs');

var mouse = require('../Mouse');

async function typeStringTo(pos = {x: 0, y:0}, string = '') {
    mouse.mouseClickLeft(pos);
    await new Promise(function(resolve) {
        setTimeout(resolve, 1000);
    });
    robot.typeString(string);
}


module.exports = {
    typeStringTo
}


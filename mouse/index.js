var robot = require('robotjs');

/**
 * 
 * @param {string} button 'left', 'middle', 'right' 
 * @param {*} pos 坐标
 * @param {*} delay 移动后延迟多少时间再执行点击事件 default:100ms
 * @param {*} smooth 是否模拟人类的移动速度 default:false
 * @param {*} double 是否双击,只有'left'生效,default:false
 */
function clickMouse(button = 'left', pos = {x:0, y:0}, delay = 100, smooth = false, double = false) {
    if(smooth) {
        robot.moveMouseSmooth(pos.x, pos.y);
    } else {
        robot.moveMouse(pos.x, pos.y);
    }
    robot.setMouseDelay(delay);
    if(button === 'left') {
        robot.mouseClick('left', double);
    } else {
        robot.mouseClick(button);
    }
}

function mouseClickLeft(pos = {x:0, y:0}, delay = 100, smooth = false, double = false) {
    clickMouse('left', pos, delay, smooth, double);
}

function mouseClickRight(pos = {x:0, y:0}, delay = 100, smooth = false) {
    clickMouse('right', pos, delay, smooth);
}

function mouseClickMiddle(pos = {x:0, y:0}, delay = 100, smooth = false) {
    clickMouse('middle', pos, delay, smooth);
}

module.exports = {
    mouseClickLeft,
    mouseClickRight,
    mouseClickMiddle
}




var robot = require('robotjs');

// 获取像素点的颜色
function getPosColor(pos = {x:0, y:0}) {
    return robot.getPixelColor(pos.x, pos.y);
}









module.exports = {
    getPosColor
}


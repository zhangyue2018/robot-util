// var robot = require('robotjs');

// ----Mouse-------
// robot.setMouseDelay(2);

// var twoPI = Math.PI * 2.0;
// var screenSize = robot.getScreenSize();
// var height = (screenSize.height / 2) - 10;
// var width = screenSize.width;
// var x,y;

// for(x=0; x<width; x++) {
//     y = height * Math.sin((twoPI * x) / width) + height;
//     robot.moveMouse(x, y);
// }

// ----Keyboard-----llo world

// robot.setKeyboardDelay(0);
// robot.typeString('hello world');
// robot.keyTap('enter');


// ----Screen---
// var mouse = robot.getMousePos();
// var hex = robot.getPixelColor(mouse.x, mouse.y);
// console.log('#' +hex + 'at x:' + mouse.x + " y:" + mouse.y);

// var mouse = robot.getMousePos();
// console.log('######', mouse);

// 
// robot.moveMouse(2302, 358);
// robot.mouseToggle('down');
// robot.dragMouse(2370, 358);
// robot.mouseToggle('up');

// robot.moveMouse(3754, 565);
// robot.mouseClick();

var robot = require('./index');

// robot.moveMouse({x: 688, y:98});

var pos = robot.getMousePos();
console.log('---mouse--pos:', pos);
// var posColor = robot.getPosColor(pos);
// console.log('---pos color:', posColor);

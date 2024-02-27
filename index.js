var mouseClick = require('./Mouse');
var screenHandle = require('./Screen');
var keyboardHandle = require('./Keyboard');

module.exports = {
    ...mouseClick,
    ...screenHandle,
    ...keyboardHandle
}
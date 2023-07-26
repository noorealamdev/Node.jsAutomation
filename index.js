var robot = require("robotjs");

const seconds = [20000, 30000, 40000, 50000, 60000];
const random = Math.floor(Math.random() * seconds.length);

while (1===1) {
    robot.moveMouse(407, 841);
    robot.mouseClick();
    robot.moveMouse(407, 400);
    robot.keyTap('down');
    robot.setKeyboardDelay(seconds[random]);

    robot.moveMouse(459, 841);
    robot.mouseClick();
    robot.moveMouse(459, 400);
    robot.keyTap('down');
    robot.setKeyboardDelay(seconds[random]);
}
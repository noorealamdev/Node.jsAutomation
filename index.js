var robot = require("robotjs");

const seconds = [20000, 30000, 40000, 50000, 60000];
const random = Math.floor(Math.random() * seconds.length);

while (1===1) {
    // Visual studio code editor
    robot.moveMouse(390, 840);
    robot.mouseClick();
    robot.moveMouse(480, 130);
    robot.keyTap('down');
    robot.setKeyboardDelay(seconds[random]);

    // Mozilla firefox browser
    robot.moveMouse(430, 840);
    robot.mouseClick();
    robot.moveMouse(740, 240);
    robot.keyTap('down');
    robot.setKeyboardDelay(seconds[random]);
}

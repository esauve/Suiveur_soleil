let intensité_max_2 = 0
let angle_max = 0
let angle_max_2 = 0
let intensité_max = 0
let angle = 180
pins.servoWritePin(AnalogPin.P0, 0)
basic.forever(function () {
    intensité_max = 0
    angle_max_2 = 0
    for (let angle = 0; angle <= 180; angle++) {
        pins.servoWritePin(AnalogPin.P0, angle)
        if (input.lightLevel() > intensité_max) {
            angle_max = angle
            intensité_max = input.lightLevel()
        }
        basic.pause(10)
    }
    for (let angle = 0; angle <= 180; angle++) {
        pins.servoWritePin(AnalogPin.P0, 180 - angle)
        if (input.lightLevel() > intensité_max_2) {
            intensité_max_2 = angle
            intensité_max_2 = input.lightLevel()
        }
        basic.pause(10)
    }
    angle = (angle_max + (180 - angle_max_2)) / 2
    pins.servoWritePin(AnalogPin.P0, angle)
    basic.pause(5000)
})

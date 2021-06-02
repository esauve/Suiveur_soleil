let intensité = 0
let angle_max = 0
let intensité_max = 0
let angle = 0
pins.servoWritePin(AnalogPin.P1, 0)
serial.redirectToUSB()
basic.forever(function () {
    intensité_max = 0
    angle_max = 0
    for (let angle = 0; angle <= 180; angle++) {
        pins.servoWritePin(AnalogPin.P1, angle)
        basic.pause(100)
        intensité = input.lightLevel()
        serial.writeLine("" + angle + " , " + intensité + " , " + intensité_max)
        if (intensité > intensité_max) {
            angle_max = angle
            intensité_max = intensité
        }
    }
    pins.servoWritePin(AnalogPin.P1, angle_max)
    basic.pause(5000)
})

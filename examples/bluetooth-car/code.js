bluetooth.onBluetoothConnected(function () {
    bluetooth.startLEDService()
    bluetooth.startButtonService()
})
dcmotor.usedc()
basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        dcmotor.m1(true, 50)
        dcmotor.m2(true, 50)
    } else if (input.buttonIsPressed(Button.A)) {
        dcmotor.m1(false, 35)
        dcmotor.m2(true, 35)
    } else if (input.buttonIsPressed(Button.B)) {
        dcmotor.m1(true, 35)
        dcmotor.m2(false, 35)
    } else {
        dcmotor.m1(false, 0)
        dcmotor.m2(false, 0)
    }
})

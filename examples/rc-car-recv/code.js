radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        dcmotor.m1(true, 50)
        dcmotor.m2(true, 50)
    } else if (receivedNumber == 2) {
        dcmotor.m1(true, 35)
        dcmotor.m2(false, 35)
    } else if (receivedNumber == 3) {
        dcmotor.m1(false, 35)
        dcmotor.m2(true, 35)
    } else {
        dcmotor.m1(false, 0)
        dcmotor.m2(false, 0)
    }
})
radio.setGroup(1)
dcmotor.usedc()

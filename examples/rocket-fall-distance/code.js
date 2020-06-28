input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    Fald = 0
})
input.onButtonPressed(Button.A, function () {
    basic.showNumber(0.5 * 9.82 * (Tid * Tid))
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(Tid)
})
input.onGesture(Gesture.FreeFall, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # #
        . # . # .
        . . # . .
        `)
    Fald = 1
})
let Tid = 0
let Fald = 0
Fald = 0
basic.forever(function () {
    if (input.acceleration(Dimension.Strength) >= 300) {
        Fald = 0
    }
    if (Fald == 1) {
        basic.pause(100)
        Tid += 0.1
    }
    if (Fald == 0) {
        basic.showLeds(`
            . . # . .
            . # . # .
            # . # . #
            . # . # .
            . . # . .
            `)
    }
})

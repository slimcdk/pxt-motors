input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Sad)
    basic.pause(5000)
    basic.showIcon(IconNames.Happy)
})
basic.showIcon(IconNames.Happy)

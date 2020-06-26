def on_gesture_shake():
    basic.show_icon(IconNames.SAD)
    basic.pause(5000)
    basic.show_icon(IconNames.HAPPY)
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

basic.show_icon(IconNames.HAPPY)

def on_gesture_shake():
    global Fald
    basic.show_leds("""
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        """)
    Fald = 0
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

def on_button_pressed_a():
    basic.show_number(0.5 * 9.82 * (Tid * Tid))
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    basic.show_number(Tid)
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_gesture_free_fall():
    global Fald
    basic.show_leds("""
        . . . . .
        . . . . .
        # # # # #
        . # . # .
        . . # . .
        """)
    Fald = 1
input.on_gesture(Gesture.FREE_FALL, on_gesture_free_fall)

Tid = 0
Fald = 0
Fald = 0

def on_forever():
    global Fald, Tid
    if input.acceleration(Dimension.STRENGTH) >= 300:
        Fald = 0
    if Fald == 1:
        basic.pause(100)
        Tid += 0.1
    if Fald == 0:
        basic.show_leds("""
            . . # . .
            . # . # .
            # . # . #
            . # . # .
            . . # . .
            """)
basic.forever(on_forever)

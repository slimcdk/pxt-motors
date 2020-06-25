def on_bluetooth_connected():
    bluetooth.start_led_service()
    bluetooth.start_button_service()
bluetooth.on_bluetooth_connected(on_bluetooth_connected)

dcmotor.usedc()

def on_forever():
    if input.button_is_pressed(Button.AB):
        dcmotor.m1(True, 50)
        dcmotor.m2(True, 50)
    elif input.button_is_pressed(Button.A):
        dcmotor.m1(False, 35)
        dcmotor.m2(True, 35)
    elif input.button_is_pressed(Button.B):
        dcmotor.m1(True, 35)
        dcmotor.m2(False, 35)
    else:
        dcmotor.m1(False, 0)
        dcmotor.m2(False, 0)
basic.forever(on_forever)

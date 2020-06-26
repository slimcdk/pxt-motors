radio.set_group(1)

def on_forever():
    if input.button_is_pressed(Button.AB):
        radio.send_number(1)
    elif input.button_is_pressed(Button.A):
        radio.send_number(2)
    elif input.button_is_pressed(Button.B):
        radio.send_number(3)
    else:
        radio.send_number(0)
basic.forever(on_forever)

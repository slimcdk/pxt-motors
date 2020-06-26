def on_received_number(receivedNumber):
    if receivedNumber == 1:
        dcmotor.m1(True, 50)
        dcmotor.m2(True, 50)
    elif receivedNumber == 2:
        dcmotor.m1(True, 35)
        dcmotor.m2(False, 35)
    elif receivedNumber == 3:
        dcmotor.m1(False, 35)
        dcmotor.m2(True, 35)
    else:
        dcmotor.m1(False, 0)
        dcmotor.m2(False, 0)
radio.on_received_number(on_received_number)

radio.set_group(1)
dcmotor.usedc()

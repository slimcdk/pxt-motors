namespace dcmotor {
    //% block
    export function m1(bool: boolean, num: number): void {
        if (bool) {
            PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED8, num, 105)
            PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED11, 100, 105)
            PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED12, 0, 105)
        } else {
            PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED8, num, 105)
            PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED11, 0, 105)
            PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED12, 100, 105)
        }
    }

    //% block
    export function m2(bool: boolean, num: number): void {
        if (bool) {
            PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED7, num, 105)
            PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED9, 100, 105)
            PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED10, 0, 105)
        } else {
            PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED7, num, 105)
            PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED9, 0, 105)
            PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED10, 100, 105)
        }
    }

    //% block
    export function m3(bool: boolean, num: number): void {
        if (bool) {
            PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED2, num, 105)
            PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED5, 100, 105)
            PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED6, 0, 105)
        } else {
            PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED2, num, 105)
            PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED5, 0, 105)
            PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED6, 100, 105)
        }
    }

    //% block
    export function m4(bool: boolean, num: number): void {
        if (bool) {
            PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED1, num, 105)
            PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED3, 100, 105)
            PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED4, 0, 105)
        } else {
            PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED1, num, 105)
            PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED3, 0, 105)
            PCA9685.setLedDutyCycle(PCA9685.LEDNum.LED4, 100, 105)
        }
    }

    //% block
    export function usedc(): void {
        PCA9685.reset(105)
        PCA9685.init(105, 40)
    }
}


namespace servomotor {
    //% block
    export function useservo(): void {
        PCA9685.reset(105)
        PCA9685.init(105, 40)
    }

    //% block
    export function servo1(num: number): void {
        PCA9685.setServoPosition(PCA9685.ServoNum.Servo13, num, 105)
    }

    //% block
    export function servo2(num: number): void {
        PCA9685.setServoPosition(PCA9685.ServoNum.Servo14, num, 105)
    }

    //% block
    export function servo3(num: number): void {
        PCA9685.setServoPosition(PCA9685.ServoNum.Servo15, num, 105)
    }

    //% block
    export function servo4(num: number): void {
        PCA9685.setServoPosition(PCA9685.ServoNum.Servo16, num, 105)
    }
}

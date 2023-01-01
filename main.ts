radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        basic.showArrow(ArrowNames.West)
        basic.pause(4000)
        basic.clearScreen()
    } else if (receivedNumber == 1) {
        basic.showArrow(ArrowNames.East)
        basic.pause(4000)
        basic.clearScreen()
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
})
radio.setGroup(1)

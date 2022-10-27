input.onButtonPressed(Button.A, function () {
    basic.showString("Button A pressed")
})
basic.showIcon(IconNames.Heart)
basic.pause(2000)
basic.forever(function () {
    basic.showString("Hello!")
    basic.pause(1000)
    basic.showIcon(IconNames.Happy)
    basic.pause(1000)
})

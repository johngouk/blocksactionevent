input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
    basic.pause(1000)
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.No)
    basic.pause(1000)
})
basic.showIcon(IconNames.Heart)
basic.pause(2000)
basic.forever(function () {
    basic.showString("Hello!")
    basic.showIcon(IconNames.Happy)
    basic.pause(1000)
})

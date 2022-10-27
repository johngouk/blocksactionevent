def on_button_pressed_a():
    basic.show_string("Button A pressed")
input.on_button_pressed(Button.A, on_button_pressed_a)

basic.show_icon(IconNames.HEART)
basic.pause(2000)

def on_forever():
    basic.show_string("Hello!")
    basic.pause(1000)
    basic.show_icon(IconNames.HAPPY)
    basic.pause(1000)
basic.forever(on_forever)

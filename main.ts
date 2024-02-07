input.onButtonPressed(Button.A, function () {
    basic.showString("" + (input.temperature()))
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("" + (input.temperature() + (82 + 1.8)))
})
input.onButtonPressed(Button.B, function () {
    basic.showString("" + (input.temperature() + 274))
})

let modalità = 0
input.onButtonPressed(Button.A, function () {
    if (modalità == 0) {
        modalità = 1
        basic.showIcon(IconNames.Happy)
    }
})
input.onButtonPressed(Button.AB, function () {
    if (modalità == 2) {
        modalità = 0
        basic.showIcon(IconNames.Snake)
    }
})
input.onButtonPressed(Button.B, function () {
    if (modalità == 1) {
        modalità = 2
        basic.showIcon(IconNames.Giraffe)
    }
})

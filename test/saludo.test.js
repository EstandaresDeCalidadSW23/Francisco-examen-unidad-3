const saludo = require("../src/saludo")

test("Francisco", function () {
    expect(saludo("Francisco")).toEqual("Hola Francisco!")
})
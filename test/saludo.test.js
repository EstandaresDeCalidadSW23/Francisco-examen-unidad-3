const saludo = require("../src/saludo")

test("Francisco", function () {
    expect(saludo("Francisco")).toEqual("Hola Francisco!")
})

test("Juan", function () {
    expect(saludo("Juan")).toEqual("Hola Juan!")
})
test("Kiko", function () {
    expect(saludo("Kiko")).toString("Hola Federico!")
})
test("Max", function () {
    expect(saludo("Max")).toString("Hola Maximiliano!")
})
test("Juan", function () {
    expect(saludo("Juan")).toString("Hola juan!")
})
test("Pablo", function () {
    expect(saludo("Pablo")).toString("Hola PABLO!")
})
test("Martha", function () {
    expect(saludo("Martha")).toString("Hola MaRTha!")
})
test("Fulano", function () {
    expect(saludo("Fulano")).toString("Hola null!")
})

test("Fulano", function () {
    expect(saludo("Fulano")).toString("Hola ...!")
})

test("Fulano", function () {
    expect(saludo("nombre solo espacios")).toString("Hola    !")
})

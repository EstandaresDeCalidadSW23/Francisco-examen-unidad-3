const saludo = require("../src/saludo");

test("Francisco", function () {
  expect(saludo("Francisco")).toEqual("Hola Francisco!");
});

test("Juan", function () {
  expect(saludo("Juan")).toEqual("Hola Juan!");
});

test("Federico", function () {
  expect(saludo("Federico")).toEqual("Hola Kiko!");
});

test("Maximiliano", function () {
  expect(saludo("Maximiliano")).toEqual("Hola Max!");
});

test("juan", function () {
  expect(saludo("juan")).toEqual("Hola Juan!");
});

test("PABLO", function () {
  expect(saludo("PABLO")).toEqual("Hola Pablo!");
});

test("MaRTha", function () {
  expect(saludo("MaRTha")).toEqual("Hola Martha!");
});

test("Valor null", function () {
  expect(saludo(null)).toEqual("Hola Fulano!");
});

test("Cadena vacía", function () {
  expect(saludo("")).toEqual("Hola Fulano!");
});

test("Cadena solo espacios", function () {
  expect(saludo("      ")).toEqual("Hola Fulano!");
});

const { Trianlge, Square, Circle } = require("./shapes.js");

describle("Triangle", () => {
    it("tests for triangle with purple background", () => {
        const triangle = new Trianlge();
        triangle.setColor("purple");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="purple" />');
    });
});

describe("Square", () => {
    it("tests for square with purple background", () => {
        const square = new Square();
        square.setColor("purple");
        expect(shape.render()).toEqual('<rect x="73" y="40" width="160" height="160" fill="purple" />');
    });
});

describe("Circle", () => {
    it("tests for triangle with purple background", () => {
        const circle = new Circle();
        circle.setColor("purple");
        expect(shape.render()).toEqual('<circle cx="150" cy="115" r="80" fill="purple" />');
    });
});
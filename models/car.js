class Car {
    id;
    color;
    brand;
    board;
    rented;

    constructor(id, color, brand, board, rented = false) {
        this.id = id;
        this.color = color;
        this.brand = brand;
        this.board = board;
        this.rented = rented;
    }

    isCarAlreadyRented() {
        return this.rented;
    }
}

Car.prototype = Object.create(Car(this.id, this.color, this.brand, this.board));

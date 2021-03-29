class Rent {
    id;
    car;
    driver
    createdAt;
    endedAt;
    reason;

    constructor(id, car, driver, createdAt, endedAt, reason) {
        id = id;
        car = car;
        driver = driver;
        createdAt = createdAt;
        endedAt = endedAt;
        reason = reason;
    }
}

Rent.prototype = Object.create(Rent(this.car, this.driver, this.createdAt, this.endedAt, this.reason));

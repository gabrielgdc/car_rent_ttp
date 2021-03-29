class Driver {
    id;
    name;
    currentlyRentingACar;

    constructor(id, name, currentlyRentingACar = false) {
        this.id = id;
        this.name = name;
        this.currentlyRentingACar = currentlyRentingACar;
    }
}

Driver.prototype = Object.create(Driver(this.id, this.name, this.currentlyRentingACar));

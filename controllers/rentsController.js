import httpStatus from "http-status";
import cars from "./carsController";

let registeredRents = [];

export async function getAllRents(req, _, _) {
    req.status(httpStatus.OK).json(registeredRents);
}

export async function getAllRentsById(req, res, _) {
    const id = req.params.id;

    if (id == null) {
        return res.status(httpStatus.BAD_REQUEST).send("Id inválido");
    }

    var rents = rents.filter(rent => rent === id);

    if (rents == null || rents.length === 0) {
        return res.status(httpStatus.NOT_FOUND).send("Nenhum aluguel foi encontrado para este Id");
    }

    return res.status(httpStatus.OK).json(rents);
}

export async function newRent(req, res, _) {
    const { carId, driverId, reason } = req.body;

    if (isCarAlreadyRented(carId)) {
        return res.status(httpStatus.FORBIDDEN).send("O carro já está sendo alugado por outro motorista");
    }

    if (driverCurrentlyRentingAnCar(driverId)) {
        return res.status(httpStatus.FORBIDDEN).send("O motorista só é possível alugar um carro por vez");
    }

    var driver;
    var car;

    var newRent = new Rent(id, driver, car, createdAt, null, reason);

    registeredRents.push(newRent);

    return res.status(httpStatus.CREATED).json(newRent);
}

export async function deleteRentById(req, res, _) {
    const id = req.params.id;

    if (id == null) {
        return res.status(httpStatus.BAD_REQUEST).send("Id inválido");
    }

    var index = registeredRents.findIndex(rent => rent.id === id);

    if (index == -1) {
        return res.status(httpStatus.NOT_FOUND).send("Aluguel não encontrado")
    }

    var deletedRent = registeredRents.splice(index, 1);
    return res.status(httpStatus.OK).json(deletedRent);
}

export async function finishRent(req, res, _) {
    const rentId = req.param.rentId;

    if (rentId == null) {
        return res.status(httpStatus.BAD_REQUEST).send("Id inválido");
    }

    const rent = registeredRents.find(rent => rent.id === id);

    if (rent == null) {
        return res.status(httpStatus.NOT_FOUND).send("Aluguel não encontrado");
    }

    rent.inUse = false;
    rent.endedDate = new Date();

    return res.status(httpStatus.OK).json(rent);
}

function isCarAlreadyRented(carId) {
    if (carId == null) return false;

    return cars.find(car => car.id === carId && car.rented);
}

function driverCurrentlyRentingAnCar(driverId) {
    if (driverId == null) return false;

    return drivers.find(driver => driver.id === driverId && driver.currentlyRentingACar);
}

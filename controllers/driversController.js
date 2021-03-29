import httpStatus from "http-status";

let drivers = [];

export async function getAllDrivers(_, res, _) {
    return res.status(httpStatus.OK).json(drivers);
}

export async function getAllDriversById(req, res, _) {
    const driverId = req.params.id;

    if (driverId == null) {
        return res.status(httpStatus.BAD_REQUEST).send("ID do motorista inválido");
    }

    const driversById = drivers.filter(driver => driver.id === driverId);

    if (driversById == null || driversById.length === 0) {
        return res.status(httpStatus.NOT_FOUND).send("Motorista não encontrado");
    }

    return res.status(httpStatus.OK).json(driversById);
}

export async function newDriver(req, res, _) {
    const driverName = req.body.name;

    if (driverName == null) {
        return res.status(httpStatus.BAD_REQUEST).send("Nome do motorista inválido");
    }
    
    const driver = new Driver(1, driverName, false);
    
    drivers.push(driver);
    
    return res.status(httpStatus.CREATED).send("");
}

export async function updateDriverByid(req, res, _) {
    const driverId = req.params.id;
    
    if (driverId == null) {
        return res.status(httpStatus.BAD_REQUEST).send("ID do motorista inválido");
    }
    
    const driver = drivers.find(driver => driver.id == driverId);
    
    if (driver == null) {
        return res.status(httpStatus.NOT_FOUND).send("Motorista não encontrado");
    }
    
    const driverUpdatedData = req.params.body;

    Object.assign(driver, driverUpdatedData);

    return res.status(httpStatus.OK).json(driver);
}

export async function deleteDriverByid(req, res, _) {
    const driverId = req.body.id;

    if (driverId == null) {
        return res.status(httpStatus.BAD_REQUEST).send("ID do motorista inválido");
    }

    var index = drivers.findIndex(driver => driver.id === driverId);

    if (index == -1) {
        return res.status(httpStatus.NOT_FOUND).send("Carro não encontrado")
    }

    var deletedDriver = drivers.splice(index, 1);
    return res.status(httpStatus.OK).json(deletedDriver);
}

export default drivers;
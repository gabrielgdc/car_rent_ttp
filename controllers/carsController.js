import httpStatus from "http-status";

let cars = [];

export async function getAllCars(_, res, _) {
    res.status(httpStatus.OK).json(cars);
}

export async function getAllCarsById(req, res, _) {
    const id = req.params.id;

    if(id == null) {
        return res.status(httpStatus.BAD_REQUEST).send("Id inválido");
    }
    
    const carsById = cars.filter(car => car.id == id);
    
    if(carsById == null) {
        return res.status(httpStatus.NOT_FOUND).send("Carro não encontrado");
    }
    
    return res.status(httpStatus.OK).json(carsById);
}

export async function getAllCarsByColor(req, res, _) {
    const color = req.params.color.toLowerCase();

    if(color == null) {
        return res.status(httpStatus.BAD_REQUEST).send("Cor inválida");
    }

    const carsByColor = cars.filter(car => car.color == color);
    
    if(carsByColor == null) {
        return res.status(httpStatus.NOT_FOUND).send("Não existe nenhum carro cadastrado com essa cor");
    }
    
    return res.status(httpStatus.OK).json(carsByColor);
}

export async function getAllCarsByBrand(req, res, _) {
    const brand = req.params.color.toLowerCase();

    if(brand == null) {
        return res.status(httpStatus.BAD_REQUEST).send("Marca inválida");
    }

    const carsByBrand = cars.filter(car => car.brand == brand);
    
    if(carsByBrand == null) {
        return res.status(httpStatus.NOT_FOUND).send("Não existe nenhum carro cadastrado com essa marca");
    }
    
    return res.status(httpStatus.OK).json(carsByBrand);
}

export async function newCar(req, res, _) {
    const {color, board, brand} = req.body;

    if (cars.includes(car => car.board === board)) {
        return res.status(httpStatus.FORBIDDEN).send("Já existe um carro cadastrado com esta placa");
    }

    const car = new Car(1, color.toLowerCase(), brand.toLowerCase(), board.toLowerCase());

    cars.push(car);

    return res.status(httpStatus.CREATED).json(car);
}

export async function deleteCarByBoardNumber(req, res, _) {
    const board = req.body.board;

    if (board == null) {
        return res.status(httpStatus.BAD_REQUEST).send("Número da placa inválido");
    }

    var index = cars.findIndex(rent => rent.board === board);

    if (index == -1) {
        return res.status(httpStatus.NOT_FOUND).send("Carro não encontrado")
    }

    var deletedCar = cars.splice(index, 1);
    return res.status(httpStatus.OK).json(deletedCar);
}

export default cars;
import express from 'express';
import { deleteCarByBoardNumber, getAllCars, newCar, getAllCarsByBrand, getAllCarsById, getAllCarsByColor } from "../../controllers/carsController";

const router = express.Router();

router.get('/getAllCars', getAllCars);
router.get('/getAllCarsById/:id', getAllCarsById);
router.get('/getAllCarsByColor/:color', getAllCarsByColor);
router.get('/getAllCarsByBrand/:brand', getAllCarsByBrand);
router.post('/', newCar);
router.delete('/:board', deleteCarByBoardNumber);
router.put('/:board', deleteCarByBoardNumber);

export default router;
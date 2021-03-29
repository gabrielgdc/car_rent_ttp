import express from 'express';
import { deleteRentById, getAllRents, getAllRentsById, newRent, finishRent } from "../../controllers/rentsController";

const router = express.Router();

router.get('/getAllRents', getAllRents);
router.get('/getAllRentsById/:id', getAllRentsById);
router.post('/', newRent);
router.delete('/:id', deleteRentById);
router.put('/:id', finishRent);

export default router;
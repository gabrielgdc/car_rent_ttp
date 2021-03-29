import express from 'express';
import { deleteDriverByid, getAllDrivers, getAllDriversById, newDriver, updateDriverByid } from "../../controllers/driversController";

const router = express.Router();

router.get('/getAllDrivers', getAllDrivers);
router.get('/getAllDriversById/:id', getAllDriversById);
router.post('/', newDriver);
router.delete('/:id', deleteDriverByid);
router.put('/:id', updateDriverByid);

export default router;
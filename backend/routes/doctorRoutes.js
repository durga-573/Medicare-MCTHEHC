const express = require('express');
const router = express.Router();
const doctorController = require('../controller/doctorController');
// const authMiddleware = require('../middleware/authMiddleware');
const auth=require('../middleware/auth');
// Public routes
router.post('/register', doctorController.registerDoctor);
router.post('/login', doctorController.loginDoctor);

// // Protected routes
// router.use(authMiddleware);

// Doctor profile routes
router.get('/profile/:id', doctorController.getDoctorById);
router.put('/profile/:id',auth.doctorAuth, doctorController.updateDoctor);

// Get all doctors
router.get('/', doctorController.getAllDoctors);

// Delete doctor
router.delete('/:id', doctorController.deleteDoctor);

// Update doctor availability
router.put('/availability/',auth.adminAuth, doctorController.updateAvailability);
router.get('/appointments/',auth.doctorAuth, doctorController.getDoctorAppointments);
router.get('/patients/', auth.doctorAuth, doctorController.getDoctorPatients);
router.get('/specializations/:specialization', doctorController.getDoctorBySpecialization);
router.get('/location/:location', doctorController.getDoctorByLocation); // Corrected the path
// router.get('/search/:search', doctorController.searchDoctors);
router.put('/accept-appointment/:id', auth.doctorAuth, doctorController.acceptAppointment);
router.get('/logout', doctorController.logoutDoctor);

module.exports = router;


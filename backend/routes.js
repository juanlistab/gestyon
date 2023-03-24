const express = require('express');
const router = express.Router();

const clubController = require('./controllers/clubController');
const reservationController = require('./controllers/reservationController');

// Club routes
router.get('/clubs', clubController.getAll);
router.post('/clubs', clubController.create);
router.get('/clubs/:id', clubController.getById);
router.put('/clubs/:id', clubController.update);
router.delete('/clubs/:id', clubController.delete);

// Reservation routes
router.get('/reservations', reservationController.getAll);
router.post('/reservations', reservationController.create);
router.get('/reservations/:id', reservationController.getById);
router.put('/reservations/:id', reservationController.update);
router.delete('/reservations/:id', reservationController.delete);

module.exports = router;

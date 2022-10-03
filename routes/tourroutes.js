const express = require('express');
const router = express.Router();
const toursControllers = require('../Controller/tourController')

router.route('/')
    .get(toursControllers.getTours)
    .post(toursControllers.CreatTours)

router.route("/trending")
    .get(toursControllers.getTendingTour)

router.route("/cheapest")
    .get(toursControllers.getCheapestTour)




router.route("/:id")
    .get(toursControllers.getTourById)
    .patch(toursControllers.UpdateTourById)




module.exports = router;
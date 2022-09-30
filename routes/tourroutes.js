const express=require('express');
const router=express.Router();
const toursControllers=require('../Controller/tourController')

router.route('/')
.get(toursControllers.getTours)
.post()



module.exports=router;
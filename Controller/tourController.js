const { creatServiceTour, getserviceTour, getServiceTourByid, getCheapestServiceTour, UpdateTourServiceById, getTendingServiceTour } = require("../services/tourService")
// const { query } = require('express');
exports.getTours = async (req, res, next) => {

   try {
     
      let filters = { ...req.query};
      const queries = {};

      const excludeFields = ['sort', 'page', 'limit']
      excludeFields.forEach(field => delete filters[field])
       
      let filtersString= JSON.stringify(filters)
      console.log(filtersString)

      filtersString=  filtersString.replace(/\b(gt|gte|lt|lte)\b/g,match=>`$${match}`)
      console.log(filtersString)
      filters=  JSON.parse(filtersString)

    

      if (req.query.sort) {
         const sortBy = req.query.sort.split(',').join(' ')
         queries.sortBy = sortBy
      }

      if (req.query.fields) {
         const fields = req.query.fields.split(',').join(' ')
         queries.fields = fields
      }

      if(req.query.page){
     const {page=1,limit=3}= req.query;
    const skip=(page-1)*parseInt(limit)
    queries.skip=skip
    queries.limit=parseInt(limit)     

       }



      const Tour = await getserviceTour(filters, queries)

      res.status(200).json({
         staus: { success: true },
         data: Tour,

      })

   }
   catch (error) {
      res.status(400).json({
         staus: { success: false },
         message: 'tour not found',
         error: error.message
      })
   }


}


exports.CreatTours = async (req, res, next) => {

   try {

      const result = await creatServiceTour(req.body)

      res.status(200).json({
         staus: { success: true },
         message: 'Tour inserted ',
         data: result,

      })

   }

   catch (error) {
      res.status(400).json({
         staus: { success: false },
         message: 'Tour not inserted',
         error: error.message
      })
   }

}

exports.getTourById = async (req, res, next) => {

   try {
      const { id } = req.params
      const result = await getServiceTourByid(id);

      res.status(200).json({
         staus: { success: true },
         data: result,

      })
   }

   catch (error) {
      res.status(400).json({
         staus: { success: false },
         message: 'Tour not getbyId',
         error: error.message
      })
   }
}


exports.UpdateTourById = async (req, res, next) => {

   try {
      const { id } = req.params;
      const result = await UpdateTourServiceById(id, req.body)

      res.status(200).json({
         staus: { success: true },
         message: 'Tour Update',
         data: result

      })

   }
   catch (error) {
      res.status(400).json({
         staus: { success: false },
         message: "Tour not Updated",
         error: error.message
      })
   }

}


exports.getTendingTour = async (req, res, next) => {

   try {

      const result = await getTendingServiceTour(req.params.data)

      res.status(200).json({
         staus: { success: true },
         message: 'tending Tour',
         data: result

      })


   }

   catch (error) {
      res.status(400).json({
         staus: { success: false },
         message: "not tending Tour found",
         error: error.message
      })
   }

}



exports.getCheapestTour = async (req, res, next) => {

   try {
      const result = await getCheapestServiceTour(req.params.data)
      res.status(200).json({
         staus: { success: true },
         message: 'tending Tour',
         data: result

      })

   }

   catch (error) {
      res.status(400).json({
         staus: { success: false },
         message: "not tending Tour found",
         error: error.message
      })
   }

}
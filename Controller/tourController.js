const {creatServiceTour,getserviceTour,getServiceTourByid, getCheapestServiceTour,UpdateTourServiceById,getTendingServiceTour}= require("../services/tourService")
const { query } = require('express');
exports.getTours=async(req,res,next)=>{

try{
   const Tour = await getserviceTour()
    
   res.status(200).json({
      staus:{success:true},
       data:Tour,
  
    })

 }
 catch(error){
   res.status(400).json({
      staus:{success:false},
      message:'tour not found',
      error:error.message
   })
 }


}


exports.CreatTours=async(req,res,next)=>{

 try{

   const result =await creatServiceTour(req.body)

   res.status(200).json({
    staus:{success:true},
    message:'Tour inserted ',
     data:result,

  })

 }

 catch(error){
    res.status(400).json({
        staus:{success:false},
        message:'Tour not inserted',
        error:error.message
     })
 }

}

exports. getTourById=async(req,res,next)=>{
   
  try{
   const {id}=req.params
   const result = await getServiceTourByid(id);

   res.status(200).json({
      staus:{success:true},
       data:result,
  
    })
  }
 
  catch(error){
   res.status(400).json({
      staus:{success:false},
      message:'Tour not getbyId',
      error:error.message
   })
  }
}


exports.UpdateTourById=async(req,res,next)=>{

 try{
   const {id}=req.params;
   const result =await UpdateTourServiceById(id,req.body)
   
   res.status(200).json({
      staus:{success:true},
      message:'Tour Update',
      data:result

   })

 }
catch(error){
   res.status(400).json({
      staus:{success:false},
      message:"Tour not Updated",
      error:error.message
   })
}

}


exports.getTendingTour=async(req,res,next)=>{

   try{
      
      const result =await getTendingServiceTour(req.params.data)
      
      res.status(200).json({
         staus:{success:true},
         message:'tending Tour',
         data:result
   
      })


   }

   catch(error){
      res.status(400).json({
         staus:{success:false},
         message:"not tending Tour found",
         error:error.message
      })
   }
   
}



exports.getCheapestTour=async(req,res,next)=>{
   
  try{
   const result= await getCheapestServiceTour(req.params.data)
   res.status(200).json({
      staus:{success:true},
      message:'tending Tour',
      data:result

   })

  }

  catch(error){
   res.status(400).json({
      staus:{success:false},
      message:"not tending Tour found",
      error:error.message
   })
  }

}
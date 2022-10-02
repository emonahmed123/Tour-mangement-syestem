const Tour = require('../models/tour');




exports.getserviceTour = async(data)=>{
    const result = await Tour.find({});

    return result
}


exports.creatServiceTour= async(data)=>{

    const result =await Tour.create(data)
    return result

}


exports.getServiceTourByid=async(id,data)=>{
     
    const result =await Tour.findByIdAndUpdate(id , { $inc: { views: 1 } },
        { new: true });
     return result

}





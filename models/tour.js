const mongoose =require('mongoose')


const tourSchema = mongoose.Schema({

    name: {
        type: String,
        required: [true, "Please provide a name for this tour."],
        trim: true,
        unique: [true, "Name must be unique"],
        minLength: [3, "Name must be at least 3 characters."],
        maxLenght: [100, "Name is too large"],
      },
     
      price: {
        type: Number,
        rquired: true,
        min: [0, "Price can't be negative"],
      },

      image: {
        type: String,
        required: [true, "Image is required"],
      },
      location: {
           type:String,
           require:[true,"location true"]
      },
     
      views: {
        type: Number,
        min: [0, "Views can't be less than 0"],
        required: true,
        default: 0,
      },


      
    
      



},{
  timestamps: true,
})


const Tour = mongoose.model('tour', tourSchema);

module.exports=Tour
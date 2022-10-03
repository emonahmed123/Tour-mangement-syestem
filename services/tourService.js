const Tour = require('../models/tour');




exports.getserviceTour = async (filters, queries) => {
    const result = await Tour.find(filters)
        .select(queries.fields)
        .sort(queries.sortBy)

    return result
}


exports.creatServiceTour = async (data) => {

    const result = await Tour.create(data)
    return result

}


exports.getServiceTourByid = async (id) => {

    const result = await Tour.findByIdAndUpdate(id, { $inc: { veiws: 1 } },
        { new: true });
    return result

}


exports.UpdateTourServiceById = async (id, data) => {

    const result = await Tour.updateOne({ _id: id }, { $set: data }, { runValidators: true })

    return result
}


exports.getTendingServiceTour = async (data) => {
    const result = await Tour.find({})
        .limit(data || 3)
        .sort({ veiws: -1, name: 1 })

    return result
}

exports.getCheapestServiceTour = async (data) => {
    const result = await Tour.find({})
        .limit(data || 3)
        .sort({ price: 1, name: 1 })

    return result
}


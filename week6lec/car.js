let mongoose = require('mongoose');

let CarSchema = mongoose.Schema({
    maker:String,
    year:Number,
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'UserCol'
    }
});

let carModel = mongoose.model('CarsCollection',CarSchema);

module.exports = carModel;
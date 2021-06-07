const Accessory = require('../models/Accessory');

function getAllbyParam (...params) {
    return Accessory.aggregate( params )
}

function create (data) {
    if (data.name.trim() == '' || data.description.trim() == '' || data.imageUrl.trim() == '') {
        throw  {message: 'All fields is required'};
    }
    let accessory = new Accessory(data);

    return accessory.save();
}


module.exports = {
    create,
    getAllbyParam
}
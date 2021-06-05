const mongoose = require('mongoose');

const accessorySchema = new mongoose.Schema({
    id: mongoose.Types.ObjectId,
    name: {
        type: String,
        required: true,

    },
    imageUrl: {
        type: String,
        required: true,
        validate: /^https?/,
    },
    description: {
        type: String,
        required: true,
        maxlength: 50,
    },
    cubes: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Cube'
        }
    ]
});


module.exports = mongoose.model('Accessory', accessorySchema);
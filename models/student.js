const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: true
        },
        email: {
            type: String,
            unique: true
            },
            age: {
                type: Number,
                required: true
            },
            address: {
                type: String,
                required: true
            },
            grade: {
                type: String,
                required: true
            },
            phone: {
                type: Number,
                required: true
                },
            major:{
                    type: String,
                }
    
    
},
{
    timestamps: true,
})
module.exports = mongoose.model('Student' ,studentSchema)
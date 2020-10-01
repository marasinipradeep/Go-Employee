var mongoose = require('mongoose'),
    Schema = mongoose.Schema
var EmployeeSchema = new Schema({
    email: {
        type: String,
        required: true,
        index: { unique: true }
    },
    password: {
        type: String,
        required: true,
        minlength: 5
    },

    displayName: { type: String },

    //Fill form after logged in
    fields:
    {
        isOnline: { type: Boolean },
        name: { type: String },
        slug: { type: String },
        type: { type: String },
        jobTitle: { type: String },
        experience: { type: String },
        contactNumber: { type: String },
        description: { type: String },
        skills: [String],
        images: [
            {
                fields: {
                    file: {
                        url: { type: String }
                    }
                }
            }
        ]
    }



});


module.exports = mongoose.model('Employee', EmployeeSchema);
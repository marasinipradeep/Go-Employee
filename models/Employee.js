var mongoose = require('mongoose'),
    Schema = mongoose.Schema
var EmployeeSchema = new Schema({
    email: {type: String,required: true,index: { unique: true }},
    password: {type: String,required: true,minlength: 5},
    displayName: { type: String },
    isOnline: { type: Boolean },
    name: { type: String },
    workType: { type: String },
    jobTitle: { type: String },
    experience: { type: String },
    contactNumber: { type: String },
    description: { type: String },
    skills: {type:String},
    images: { type: String }
});


module.exports = mongoose.model('Employee', EmployeeSchema);
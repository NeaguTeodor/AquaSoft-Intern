const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create project schema & model
const ProjectSchema = new Schema({
    project_name: {
        type: String,
        required: [true, 'Name is required']
    },
        
    start_date: {
        type: Date,
        default: Date.now,
    },
    
    planned_end_date: {
        type: String,
        required: [true, 'Date is required']
        
    },
    description: {
        type: String,
        required: [true, 'Description is required']
    },
    project_code: {
        type: String,
        required: [true, 'Project Code is required']
    }


});


const Project = mongoose.model('project',ProjectSchema);

module.exports = Project;
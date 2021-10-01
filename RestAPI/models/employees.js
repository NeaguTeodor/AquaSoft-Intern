const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create  schema & model
const EmployeeSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    adress: {
        type: String,
        required: [true, 'Adress is required']
    },
    email: {
        type: String,
        required: [true, 'Email is required']
    },
    hire_date: {
        type: Date,
        default: Date.now,
    },
    
    salary: {
        type: Number,
        required: [true, 'Salary is required']
    },
    job_title: {
        type: String,
        required: [true, 'Job Title is required']
    }

});


const Employee = mongoose.model('employee',EmployeeSchema);

module.exports = Employee;
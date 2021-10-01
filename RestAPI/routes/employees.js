const express = require('express');
const router = express.Router();
const Employee = require('../models/employees');

// get a list of employees from the database
router.get('/employees',function(req,res,next){
    Employee.find({}).then(function(employees){
        res.send(employees);
    }).catch(next);
});

// add a new employee to database
router.post('/employees',function(req,res,next){
    Employee.create(req.body).then(function(employee){
        res.send(employee);
    }).catch(next);
});

// update a employee in the database
router.put('/employees/:id',function(req,res,next){
    Employee.findOneAndUpdate({_id: req.params.id},req.body).then(function(employee){
        Employee.findOne({_id: req.params.id}).then(function(employee){
            res.send(employee);
        });
    });
});

// delete a employee in the database
router.delete('/employees/:id',function(req,res,next){
    Employee.findOneAndDelete({_id: req.params.id}).then(function(employee){
        res.send(employee);
    });
});

module.exports = router;
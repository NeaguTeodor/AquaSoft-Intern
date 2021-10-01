const express = require('express');
const router = express.Router();
const Project = require('../models/projects');

// get a list of project from the database
router.get('/projects',function(req,res,next){
    Project.find({}).then(function(projects){
        res.send(projects);
    }).catch(next);
});

// add a new project to database
router.post('/projects',function(req,res,next){
    Project.create(req.body).then(function(project){
        res.send(project);
    }).catch(next);
});

// update a project in the database
router.put('/projects/:id',function(req,res,next){
    Project.findOneAndUpdate({_id: req.params.id},req.body).then(function(project){
        Project.findOne({_id: req.params.id}).then(function(project){
            res.send(project);
        });
    });
});

// delete a project in the database
router.delete('/projects/:id',function(req,res,next){
    Project.findOneAndDelete({_id: req.params.id}).then(function(project){
        res.send(project);
    });
});

module.exports = router;
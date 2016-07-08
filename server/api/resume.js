import express from 'express';
import mongoose from 'mongoose';
import config from 'config';

const API_PATH = config.get('API_PATH');
const router = express.Router();
const Resume = mongoose.model(
    'Resume',
    new mongoose.Schema({
        title: String,
        name: String,
        email: String,
        exp: [{text: String}],
        userId: String
    })
);

router.get(API_PATH + '/resumes/', function(req, res) {
    Resume.find({userId: req.user._id}, function(err, resumes) {
        if (err) {
            res.send(err);
        }
        res.json(resumes);
    });
});

router.get(API_PATH + '/resumes/:resumeId', function(req, res) {
    Resume.findOne({
        _id: req.params.resumeId
    }, function(err, resume) {
        if (err) {
            res.send(err);
        }
        res.json(resume);
    });
});

router.post(API_PATH + '/resumes/', function(req, res) {
    req.body.userId = req.user._id;
    var newResume = new Resume(req.body);
    newResume.save(function(err, resume) {
        if (err) {
            res.send(err);
        }
        res.json(resume);
    });
});

router.put(API_PATH + '/resumes/:resumeId', function(req, res) {
    Resume.findOneAndUpdate(
        {
            _id: req.body._id
        }, 
        {
            $set: req.body
        }, 
        function(err, resume) {
            if (err) {
                res.send(err);
            }
            res.json(resume);
        }
    );
});

router.delete(API_PATH + '/resumes/:resumeId', function(req, res) {
    Resume.findOneAndRemove(
        {
            _id: req.params.resumeId
        },
        {},
        function(err, resume) {
            if (err) {
                res.send(err);
            }
            res.json(resume);
        }
    );
});

module.exports = router;
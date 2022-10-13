const router = require("express").Router();
const Control = require('../models/Control.model');
const mongoose = require("mongoose")


router.post('/tracing', (req, res) => {
  const { glycemic, symptom, cause, time } = req.body;
 
  Control.create({ glycemic, symptom, cause, time })
    .then(response => res.json(response))
    .catch(err => res.json(err));
});

router.get('/tracing', (req, res, next) => {
  Control.find()
    .then(allTracing => res.json(allTracing))
    .catch(err => res.json(err));
});

router.get('/tracing/:id', (req, res, next) => {
    const { id } = req.params;
   
    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(400).json({ message: 'Specified id is not valid' });
      return;
    }
   

    Control.findById(id)
      .then(control => res.status(200).json(control))
      .catch(error => res.json(error));
  });
   
   

  router.put('/tracing/:id', (req, res) => {
    const { id } = req.params;

    Control.findByIdAndUpdate(id, req.body, { new: true })
      .then(updatedTracing => res.json(updatedTracing))
      .catch(error => res.json(error));
  });
   
   
  router.delete('/tracing/:id', (req, res, next) => {
    const { id } = req.params;
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(400).json({ message: 'Specified id is not valid' });
      return;
    }
   
    Control.findByIdAndRemove(id)
      .then(() => res.json({ message: `Tracing with ${id} is removed successfully.` }))
      .catch(error => res.json(error));
  });

  router.get('/tracing', (req,  res, next) => {
    
    const {glycemic, symptom}= req.params
    Control.find({glycemic,symptom})
      .then(allTracing => res.json(allTracing))
      .catch(err => res.json(err));
  });
 
module.exports = router;
const mongoose = require('mongoose');
const { Schema, model } = mongoose;
 
const controlSchema = new Schema({
  glycemic: {
    type:Number,
    required: true
    },
  symptom: {
    type: String,
    required: true
    },
    cause: String,
  time: {
    type: Date,
    default: Date.now()
  },
},
{
  timestamps: true,
});
 
module.exports = model('Control', controlSchema);
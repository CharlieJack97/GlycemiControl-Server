const mongoose = require('mongoose');
const { Schema, model } = mongoose;
 
const controlSchema = new Schema({
  title: String,
  description: String,
  time: {
    type: Date,
    default: Date.now()
  },
},
{
  timestamps: true,
});
 
module.exports = model('Control', controlSchema);
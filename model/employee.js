const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema(
    {
    image: {
        type: Buffer,
    },
      name: {
        type: String,
        required: true,
        unique: true,
      },
      position: {
        type: String,
        required: true,
      },
      officePhone:{
        type: Number,
        required: true,
      },
      mobilePhone:{
        type: Number,
        required: true,
      },
      sms:{
        type: Number,
        required: true,
      },
      email:{
        type: String,
        required: true,
      }
    },
    { timestamps: true }
  );
  
  module.exports = mongoose.model("Employee", EmployeeSchema);

  
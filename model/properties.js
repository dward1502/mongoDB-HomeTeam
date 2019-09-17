const mongoose = require('mongoose');

const PropertySchema = new mongoose.Schema({
  'Unit Name': String,
  'Market Rent': Number,
  'Default Deposit': Number,
  'Sqft': Number,
  'Bedrooms': Number,
  'Bathrooms': Number,
  "Unit Address": String,
  "Unit Street Address 1": String,
  "Unit City": String,
  "Unit State": String,
  "Unit Zip": Number,
  "Marketing Title": String,
  "Advertised Rent": String,
  "Unit Type": String,
  "Application Fee": Number
})

module.exports = mongoose.model('properties', PropertySchema)
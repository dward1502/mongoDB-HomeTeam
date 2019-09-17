const express = require('express');
const router = express.Router();
const PropInfo = require('../model/properties');

router.get('/properties', (req,res,next) => {
  PropInfo.find((err,properties) =>{
    if(err) return next(err);
    res.json(properties)
  })
})

router.get('/properties/:address', (req,res,next) => {
  const query = req.params.address;
  console.log(query);

  PropInfo.findOne({'Unit Street Address 1': query},(err,data) => {
    if(err) return next(err);
    res.json(data);
  })
})

router.get('/properties/bedrooms/:number', (req,res,next) => {
  const query = req.params.number;
  console.log(query);
  PropInfo.find({'Bedrooms':{$eq: query}}, (err,data) => {
    if(err) return next(err);
    res.json(data);
    console.log(data);
  })
});



module.exports = router;
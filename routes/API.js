const express = require('express');
const router = express.Router();
const PropInfo = require('../model/properties');

router.get('/properties', (req,res,next) => {
  PropInfo.find().exec()
  .then(docs => {
    console.log(docs);
    res.status(200).json(docs)
  })
  .catch(err =>{
    console.log(err);
    res.status(500).json({
      error:err
    });
  });
});

router.get('/properties/:address', (req,res,next) => {
  const query = req.params.address;
  console.log(query);

  PropInfo.findOne({'Unit Street Address 1': query}).exec()
  .then(docs => {
    console.log(docs);
    res.status(200).json(docs)
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({
      error:err
    });
  });
});

// router.get('/properties/bedrooms/:number', (req,res,next) => {
//   const query = req.params.number;
//   console.log(query);

//   PropInfo.find({'Bedrooms':{$eq: query}})
//   .then(docs => {
//     console.log(docs);
//     res.status(200).json(docs)
//   })
//   .catch(err => {
//     console.log(err);
//     res.status(500).json({
//       error:err
//     });
//   });
// });
router.get('/properties/bedrooms/:number/available', (req,res,next) => {
  const query = req.params.number;

  console.log(query);
  let address = [];

  PropInfo.find({"Bedrooms":query, Available:"Yes"})
  .then(docs => {

    console.log(docs);
    console.log(docs[0]["Unit Address"])
    docs.map(data =>{
      console.log(`Address in map ${data["Unit Address"]}`);
      address.push(data["Unit Address"]);
    })
    res.json(docs)
  })
  .catch(err => {
    console.log(err);
    // res.status(500).json({
    //   error:err
    // });
  });
  console.log(address)
});


module.exports = router;
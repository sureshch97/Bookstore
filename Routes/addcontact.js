const express = require('express');
const router = express.Router();

const Contact = require('../modules/addcontact');
const { check, validationResult } = require("express-validator");
//ROUTE POST api/addcontact

router.post('/' ,[
    check('Name' , 'Name is required').not().isEmpty(),
    check('email', 'email is required').not().isEmpty()
] , async (req,res)=>{

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

   const {Name, email}= req.body;

   try {

    contact = new Contact({
        Name,
        email
    });

    await contact.save();

    res.json('contact added');
       
   } catch (err) {

    console.error(err.message);
    res.status(500).send("Server Error");
       
   }
});


module.exports = router;
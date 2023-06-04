const express = require('express');
const router = express.Router();
const app = express();
const bodyParser = require('body-parser');


//create application:
const jsonParser = bodyParser.json();

// parse application/json
app.use(bodyParser.json())

require('../db/connection');
const Contact = require('../model/user/userSchema');
const Protfolio = require('../model/admin/protfolioSchema');

//contact route:
router.post('/contact',jsonParser, async(req, res) => {
    const {fname, lname, email, phone, message} = req.body;

    if(!fname || !lname || !email || !phone || !message){
        return res.json({error: "Please, filled the contact form"});
    }

    try{
        const userMessage = new Contact({fname, lname, email, phone, message});
    
        await userMessage.save();
        res.status(201).json({message:"Message submitted successfully."});
    }catch(err){
        console.log(err);
    }
})


//protfolio route:
router.get('/protfolio', async(req, res) => {
    try {
        const allProtfolio = await Protfolio.find();
        return res.json(allProtfolio);
      }
    catch (error) {
        res.json({ message: error });
      }
})


module.exports = router;
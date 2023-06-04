const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const app = express();

//create application:
const jsonParser = bodyParser.json();

// parse application/json
app.use(bodyParser.json());

require('../db/connection');
const Contact = require('../model/user/userSchema');
const Protfolio = require('../model/admin/protfolioSchema');


//admin protfolio POST route:
router.post('/admin/protfolio',jsonParser,  async(req, res) => {
    const {projectName, gitHub, liveLink} = req.body;

    if(!projectName || !gitHub || !liveLink){
        return res.json({error: "Please, filled the Protfolio form"});
    }
    try{
        const protfolio = new Protfolio({projectName, gitHub, liveLink});
    
        await protfolio.save();
        res.status(201).json({message:"New Project created successfully."});
    }catch(err){
        console.log(err);
    }
})


//admin contact GET route:
router.get('/admin/contact', async(req, res) => {
    try {
        const allContact = await Contact.find();
        return res.json(allContact);
      } catch (error) {
        res.json({ message: error });
      }
})

module.exports = router;
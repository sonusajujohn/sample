const express=require('express');
const router=express.Router();

// Requiring the data inorder to do CRUD operations
const movieModel=require('../model/movieData');

// THE BELOW CODE IS MANDATORY FOR POST OPERATION - The below code helps the code to understand the json code
router.use(express.json());                    
router.use(express.urlencoded({extended:true}));    //This code is written to encode the data in json file if any image or file is there


// GET OPERATION

router.get('/', async (req,res)=>{          //async-await can be only used in +ve scenario
    try{
        const data=await movieModel.find()      //try-catch is used to check if the condition is true it will execute in try block and if error occur it will catch in the catch block 
        res.status(200).send(data);
    }catch(error){
        res.status(404).send(data);
    }
});

// POST OPERATION

router.post('/addMovies',async (req,res)=>{
    try {
        var item=req.body;   //mandatory: Inorder to take the item from the body
        const data1=new movieModel(item);      //modelfile required in the 1st of code
        const savedata=await data1.save();     //data1 is declared i the above line
        res.status(200).send("DATA SAVED SUCCESSFULLY");
    } catch (error) {
        res.status(404).send("POSTING OF DATA UNSUCCESSFULL");
    }
})

// UPDATE OR PUT OPERATION

router.put('/update/:id',async (req,res)=>{
    try {
        const id=req.params.id;      //the id in the url of put is accessed in req.params.id 
        const data=await movieModel.findByIdAndUpdate(id,req.body);   //updation is to be done in req.body
        res.status(200).send("UPDATION SUCCESSFULLY DONE");
    } catch (error) {
        res.status(404).send("UNSUCCESSFUL UPDATION - FAILURE");
    }
})

// DELETE OPERATION

router.delete('/delete/:id',async (req,res)=>{
    try {
        const id=req.params.id;
        const data=await movieModel.findByIdAndDelete(id);
        res.status(200).send("DELETION SUCCESSFULLY DONE")    
    } catch (error) {
        res.status(404).send("DELETION UNSUCCESSFUL");
    }
})

module.exports=router;
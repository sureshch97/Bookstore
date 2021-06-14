
const express = require('express');
const router = express.Router();
const {check , validationResult} = require('express-validator');
const path = require('path');
const Book = require('../modules/addbook');



//route POST api/books
router.post('/' ,[
    check('Name' , 'Name is required').not().isEmpty(),
    check('category', 'category is required').not().isEmpty()
] , async (req,res)=>{

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

   const {Name, category , label,price,description}= req.body;


  

    try {
      if (req.files === null) {
        return res.status(400).json({ msg: "No file uploaded" });
      }
      const file = req.files.file;
   
      file.mv(`${__dirname}/../client/public/uploads/${file.name}`, async (err) => {
        if (err) {
          console.error(err);
          return res.status(500).send(err);
        }

        book = new Book({ 
          Name,
          category,
          label,
          price,
          description,
          image: `/uploads/${file.name}`
          
      });
      
      await book.save();
  
      return res.json('book added');
      //res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
         
     }
      )}
    

      catch (err) {
  
        console.error(err.message);
        res.status(500).send("Server Error");
           
       }
        
  //    console.log(req.files);
  //  const file = req.files.file;

  //  file.mv(
  //    path.join(`${__dirname}/client/public/uploads/${file.name}`),
  //    async (err) => {
  //      if (err) {
  //        console.error(err);
  //        return res.status(500).send(err);
  //      }
  //      try {
  //        const filePath = `/static/uploads/${file.name}`;
  //        const newBookWithImage = new Book({
  //          Name, 
  //          price,
  //          label,
  //          image: filePath,
  //          category,
  //          description,
  //        });

  //        const book = await newBookWithImage.save();
  //        console.log(newBookWithImage);
  //        return res.json(book);
  //      } catch (err) {
  //        console.error(err.message);
  //        return res.status(500).send("Server Error");
  //      }
  //    }
  //  );
 });



//GET BOOKS
router.get('/' , async(req,res)=>{

    try {

        const books = await Book.find();
        res.json(books);
        
    } catch (err) {

        console.err(err.message);
        res.status(500).send('server error');
        
    }
 });


 //GET books by ID 

 router.get('/:id' , async(req,res)=>{

    try {
        
        const book = await Book.findById(req.params.id);

        if(!book){
            res.status(500).json({msg:'BOOK IS NOT FOUND'})
        }
         res.json(book);

    
       
    } catch (err) {

    
        res.status(500).send('server error');
        
    }
 })


//POST COMMENTS
 router.post('/comment/:id' ,[

    check('Name' , 'Name is required').not().isEmpty(),
    check('comment', 'comment is required').not().isEmpty()

] , async (req,res)=>{

    const {Name, comment}= req.body;

   try {
          const book = await Book.findById(req.params.id);
          const Comment = {Name , comment}

          book.comments.unshift(Comment)
          await book.save();
          res.json(book.comments);
   
       
   } catch (err) {

      console.log(err.message);
      res.status(500).send("Server Error");
       
   }

    

});

module.exports = router;




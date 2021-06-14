const express = require('express');
const path = require('path');
const connectDb = require('./config/db');
const fileUpload = require('express-fileupload');



const app = express();

//PORT
const PORT = process.env.PORT || 5000;

//connect database
connectDb();

//init middleware
app.use(express.json({extended:false}));

//define routes
app.use("/static", express.static("public"));

app.use(fileUpload());

//Upload End point

app.post('/upload', (req, res) => {
    if (req.files === null) {
      return res.status(400).json({ msg: "No file uploaded" });
    }
    const file = req.files.file;
    file.mv(`${__dirname}/client/public/uploads/${file.name}`, (err) => {
      if (err) {
        console.error(err);
        return res.status(500).send(err);
      }
      res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
    });
  });

//routes

app.use('/api/books' , require('./Routes/addbook'));

app.use('/api/contacts' , require('./Routes/addcontact'));


if(process.env.NODE_ENV === 'production'){

  app.use(express.static(path.join(__dirname , '/client/build')));

  app.get('*' , (req,res)=>res.sendFile(path.resolve(__dirname , 'client','build','index.html')))

}else{
  
   app.get('/' , (req,res)=>res.send('api is running'));

}


app.listen(PORT , ()=>console.log(`server is started ${PORT}` ));


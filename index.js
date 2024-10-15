const express = require("express");
const app = express();
 
require("dotenv").config();
const PORT = process.env.PORT || 3000;

app.use(express.json());
const fileupload = require("express-fileupload");
app.use(fileupload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}));
 
const db = require("./config/dbConnect");
db.connect();
 
const cloudinary = require("./config/cloudinary");
cloudinary.cloudinaryConnect();
 
const Upload = require("./routes/fileUploadRoute");
app.use('/api/v1/upload', Upload);

app.listen(PORT, () => {
    console.log(`App is running at ${PORT}`);
})
const express = require('express');
const multer  = require('multer');
const app = express();
const path = require('path')

app.use(express.static('public')); // for serving the HTML file

app.get('/', function(req, res) {
   res.sendFile(path.join(__dirname + '/client/public/index.html'))
}) 

const storage = multer.diskStorage({
   destination: function (req, file, cb) {
     cb(null, 'uploads/')
   },
   filename: function (req, file, cb) {
     cb(null, Date.now() + '.ogg') //Appending .jpg
   }
 })
 
const upload = multer({ storage: storage });

app.post('/upload', upload.single('upl'), function (req, res) {
   console.log(req.body);
   console.log(req.file);
   res.send('ok')
   // do stuff with file
});

app.listen(8080);

process.on('SIGINT', () => { console.log("Bye bye!"); process.exit(); })
const express = require('express');
const multer  = require('multer');
const app = express();
const path = require('path')

app.use(express.static('public')); // for serving the HTML file

const upload = multer({ dest: __dirname + '/public/uploads/' });
const type = upload.single('upl');

app.use('/public', express.static('public'));

app.get('/', function(req, res) {
   res.sendFile(path.join(__dirname + '/client/public/index.html'))
})

app.post('/api/test', type, function (req, res) {
   console.log(req.body);
   console.log(req.file);
   // do stuff with file
});

app.listen(3000);

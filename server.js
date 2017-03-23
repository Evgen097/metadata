var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const port = process.env.PORT || 8080;
var multer  = require('multer');
app.use(express.static('public'));
const fs = require('fs');
const path = require('path');

var upload = multer({ dest: 'uploads/', limits: { fileSize: 100000000 } });



app.post('/upload', upload.single('file'), function (req, res, next) {

    console.log(req.file.size)
    var obj = JSON.stringify({size:req.file.size});
    fs.unlinkSync('uploads/' + req.file.filename, function(err, callback) {
        if (err) return console.error(err);
        callback(null);
    });

    
    console.log('Hello World app post!')
    console.log(obj)
    res.send(obj);

})









app.listen(port, function () {
  console.log("Server has started.")
})







/*

npm run dev

git status
git add .
git commit -m "initial commit"
git remote add origin https://github.com/Evgen097/
git push origin master

node server.js


app.get('/', function (req, res) {
  console.log('Hello World!')
  res.send('Hello World!');
});


app.post('/upload', function (req, res) {
  console.log('Hello World app post!')
  res.send('Hello World app post!');
});

*/
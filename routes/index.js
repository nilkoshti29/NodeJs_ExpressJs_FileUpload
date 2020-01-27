var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


//fileUpload

router.post('/upload', function(req, res, next) {
 
  if (Object.keys(req.files).length == 0) {
    return res.status(400).send('No files were uploaded.');
  }

  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  let myfile = req.files.file123;
  let myfilename = req.files.file123.name;

  // Use the mv() method to place the file somewhere on your server
  myfile.mv("myuploads/"+myfilename, function(err) {
    if (err)
      return res.status(500).send(err);

    res.send('File uploaded!');
  });
 
});
module.exports = router;

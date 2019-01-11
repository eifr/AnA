/* Load Modules */
const express = require('express');
const router = express.Router();

/* Load controller */
const AptController = require('../../controller/aptController');
const aptController = new AptController();

/* Load Multer (uploading files) */
let multer = require('multer');
let fs = require('fs-extra');


var storage = multer.diskStorage({
    destination:'./aptImages/',
     //(req, file, cb) => {
     //   const dir = 
    
        //fs.mkdir(dir, err => cb(err, dir))
    //  },
    filename: function(req, file, callback) {
        callback(null, file.fieldname )
    }
});
var upload = multer({ storage });


/**
 * Apt Entity routes
 */
router.get('/count', function (req, res) {
    aptController.countAll(res);
});

router.get('/exists/:id', function (req, res) {
    aptController.exists(req, res);
});

router.get('/:id', function (req, res) {
    aptController.findById(req, res);
});

router.get('/', function (req, res) {
    aptController.findAll(res);
});

router.put('/:id', function (req, res) {
    aptController.update(req, res);
});

router.post('/create', upload.any(), function (req, res) {
    aptController.create(req, res)
    .then(()=>{
       // console.log(res.locals.id)
        //console.log(req.files)
        
        if(req.files) {

            let i=1; //Naming files

            //Directory config
            const dir = './aptImages/' + res.locals.id + '/';
            fs.mkdirSync(dir);

            req.files.forEach((file) => {             
                
                //Naming and saving file
                let filename = dir + i + '-' +  file.originalname;
                i++;
                fs.rename(file.path, filename, function(err) {
                    if(err)throw err;
                })

            })
        }
        
    });
});

router.delete('/:id', function (req, res) {
    aptController.deleteById(req, res);
});

module.exports = router;


const multer = require('multer');


 const storage = multer.diskStorage(
     {
    
    destination:function(req,file,cb){
        cb(null,'uploads')
    },
    filename:function(req,file,cb){
        
        const id = req.body.id
       var fileExt = file.originalname.split('.').pop();

        cb(null,id+".png")
    }
});

const uploads =multer({storage})

module.exports =uploads;
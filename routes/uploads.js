
const multer = require('multer');


 const storage = multer.diskStorage(
     {
    
    destination:function(req,file,cb){
        cb(null,'uploads')
    },
    filename:function(req,file,cb){
        console.log("req.body.id")
        console.log(req)
        var fileExt = file.originalname.split('.').pop();
        cb(null,"pradeep"+"."+fileExt)
    }
});

const uploads =multer({storage})

module.exports =uploads;
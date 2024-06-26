const path = require('path')
const multer=require('multer')

const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,path.join(__dirname,'../public/admin/turfPhotos'))
    },
    filename:function(req,file,cb){
        const name= Date.now()+'-'+file.originalname
        cb(null,name)
    }
})

const upload=multer({storage})

module.exports=upload
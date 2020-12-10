const multer = require('multer');
// const { v4: uuidv4 } = require('uuid');

//用意是用mimetype去決定副檔名
const extMap = {
    'image/png': '.png',
    'image/jpeg': '.jpg',
    'image/gif': '.gif',
};


const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, __dirname + '/../public/images')
    },
    filename: function(req, file, cb){
        const ext = extMap[file.mimetype];
        if(ext){
            cb(null, + ext);
            // cb(null, uuidv4() + ext);
        } else {
            cb(new Error('...'));
        }
    },
});


//要先過濾是不是我要的檔案
const fileFilter = function(req, file, cb){
    //如果有值true就是我要的 沒有值的話false我就不要
    //用兩個驚嘆號可以拿到布林值
    cb(null, !! extMap[file.mimetype]);
};

module.exports = multer({
    storage,
    fileFilter,
});

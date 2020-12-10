require('dotenv').config();


const express = require('express')
const app = express()
const multer = require('multer')
const upload = multer({ dest: 'tmp_uploads/' })
const fs = require('fs')
const session = require('express-session')
const MysqlStore = require('express-mysql-session')(session)
const db = require('./db_connect2')


//top level middleware 把原本放在url的parse拿上來
app.use(express.urlencoded({ extended: false }));
//解析json的middleware
app.use(express.json());

const cors = require('cors')


//設定白名單
const corsOptions = {
    credentials: true,
    origin: function (origin, cb) {
        console.log(`origin: ${origin}`)
        cb(null, true)
    }
};
app.use(cors(corsOptions))
//用session在資料庫新增資料
const sessionStore = new MysqlStore({}, db);

//會解析req過來的JSON字串
//urlencoded是exoress的body-parser功能
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//讓public暴露
app.use(express.static('public'));


//首頁的推薦產品
app.get('/', (req, res) => {
    db.query('SELECT * FROM tsao_products limit 4')
        .then(([results]) => {
            res.json(results);
        })
})



//設定Comment的路由
app.use('/comment', require('./routers/commentRoutes'))
//設定MEMBER的路由
const memberRoutes = require('./routers/memberRoutes');
app.use('/member', memberRoutes);
//商品
const product = require("./routers/product");
app.use('/product', product);
//文章
const articleRoutes = require("./routers/articleRoutes")
app.use('/article', articleRoutes)
//活動
const courseRoutes = require("./routers/courseRoutes")
app.use('/course', courseRoutes)
//後台
const sellerRoutes = require(__dirname + '/routers/sellerRoutes')
app.use('/seller', sellerRoutes)
//購物車
const cartRoutes = require(__dirname + '/routers/cartRoutes')
app.use('/api', cartRoutes)

app.listen(3000, () => {
    console.log('伺服器已啟動...')
})
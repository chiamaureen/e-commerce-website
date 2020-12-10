var express = require("express");
var app = express();
const db = require("../db_connect2");
const cors = require("cors");
const router = express.Router();
const multer = require("multer");
const upload = multer({ dest: "tmp_upload" });
const fs = require("fs");



var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({
  extended: true,
}));
var jsonParser = bodyParser.json();


router.use(bodyParser.json());

router.use(express.static("public"));
router.use(cors());

router.get("/sellerClass-db", jsonParser, (req, res) => {
  db.query("SELECT * FROM Class").then(([results]) => {
    res.json(results);
  });
});


router.get('/sellerOrder/:Order_id', jsonParser, async (req, res) => {
  const sql = "SELECT * FROM order_info WHERE Order_id=?";

  const [results] = await db.query(sql, [req.params.Order_id]);

  res.json(results)
})

router.post('/OrderEdit/:Order_id', async (req, res) => {
  const data = { ...req.body };
  console.log(123123123);
  console.log(req.body);
  const sql = "UPDATE `order_info` SET ? WHERE Order_id=?";
  const [{ affectedRows, changedRows }] = await db.query(sql, [data, parseInt(req.params.Order_id)]);
  // {"fieldCount":0,"affectedRows":1,"insertId":0,"info":"Rows matched: 1  Changed: 0  Warnings: 0","serverStatus":2,"warningStatus":0,"changedRows":0}
  res.json({
    success: !!changedRows,
    affectedRows,
    changedRows,
  });
});

router.delete("/OrderDel/:Order_id", async (req, res) => {
  const sql = "DELETE FROM `order_info` WHERE Order_id=?";
  console.log(req.params.Order_id);
  const [results] = await db.query(sql, [req.params.Order_id]);
  res.json([results]);
});



router.use("/sellerOrder", jsonParser, async (req, res) => {
  let orderBy = "";
  let sql = "";
  console.log(req.body.Options)
  switch (parseInt(req.body.Options)) {
    default:
    case 0:
      orderBy = sql;
      break;
    case 1:
      orderBy = " WHERE Order_State = 1 ";
      break;
    case 2:
      orderBy = " WHERE Order_State = 2 ";
      break;
    case 3:
      orderBy = "  WHERE Order_State = 3  ";
      break;
    case 4:
      orderBy = "  WHERE Order_State = 4 ";
      break;
    case 5:
      orderBy = "  WHERE Order_State = 5 ";
      break;
      case 6:
        orderBy = sql;
        break;
    case 7:
      orderBy = "  ORDER BY `Order_CreatedTime` ASC  ";
      break;
      case 8:
      orderBy = "  ORDER BY `Order_CreatedTime` DESC ";
      break;
 }
  sql = "SELECT * FROM `order_info` " + orderBy;
  if (req.body.inputSearch) {
    sql =
      "SELECT * FROM `order_info` WHERE `Member_name` or `Order_TotalPrice`  LIKE " +
      `'%${req.body.inputSearch}%'`;

  }
  const [results] = await db.query(sql);
  return res.json(results);
}
)



router.post("/login", async (req, res) => {
  const sql = "SELECT * FROM `selleraccount` WHERE account = ? AND password = ?"
  const [results] = await db.query(sql, [req.body.account, req.body.password])
  return res.json([results]);

})

router.get("/ClassData", async (req, res) => {
  let sql = "SELECT * FROM course_list";
  const [results] = await db.query(sql);
  res.json(results);
});


// router.get("/ClassData",jsonParser, (req, res) => {
//   db.query("SELECT * FROM ClassData").then(([results]) => {
//     // console.log(results)
//     res.json(results);
//   });
// });

router.get("/ClassData/:sid", async (req, res) => {
  let sql = "SELECT * FROM course_list WHERE sid=?";
  const [results] = await db.query(sql, [req.params.sid]);
  res.json(results);
});

router.post(
  "/ClassAdd",
  jsonParser,
  upload.single("pic_big"),
  async (req, res) => {
    const data = { ...req.body };
    let sql = "INSERT INTO `course_list` set ?";
    await db.query(sql, [data]);
    console.log(data);

    res.json("ok");
  }
);

router.post("/upload-classphoto", upload.single("pic_big"), (req, res) => {
  if (req.file && req.file.originalname) {
    switch (req.file.mimetype) {
      case "image/png":
      case "image/jpeg":
      case "image/gif":
        fs.rename(
          req.file.path,
          __dirname + "/../../public/Img/CourseList/" + req.file.originalname,
          (error) => {
            return res.json({
              success: true,
              path: "/Img/CourseList/" + req.file.originalname,
              req: req.file,
            });
          }
        );

        break;
      default:
        fs.unlink(req.file.path, (error) => {
          return res.json({
            msg: "不是圖檔",
          });
        });
    }
  } else {
    return res.json({
      msg: "沒有上傳檔案",
    });
  }
});

router.post("/ClassEdit/:sid", jsonParser, async (req, res) => {
  const data = { ...req.body };
  const sql = "UPDATE `course_list` SET ? WHERE sid=?";
  res.json("ok");
  console.log(req.params.sid);
  await db.query(sql, [data, parseInt(req.params.sid)]);
  console.log(data);
});


router.delete("/ClassData/del/:sid", async (req, res) => {
  const sql = "DELETE FROM `course_list` WHERE sid=?";
  console.log(req.params.sid);
  const [results] = await db.query(sql, [req.params.sid]);
  res.json([results]);
});








module.exports = router;

const express = require("express");
const router = express.Router();
const db = require("../db_connect2");
const cors = require("cors");
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const multer = require("multer");
const upload = multer({ dest: __dirname + "../../tmp_upload" });
const fs = require("fs");

router.post("/get-db", jsonParser, async (req, res) => {
  let orderBy = "";
  let sql = "";
  switch (parseInt(req.body.Options)) {
    default:
    case 0:
      orderBy = " ORDER BY Specialoffer DESC ";
      break;
    case 1:
      orderBy = " ORDER BY Specialoffer ";
      break;
    case 2:
      orderBy = " ORDER BY Selling  ";
      break;
    case 3:
      orderBy = " WHERE  Specialoffer < price ";
      break;
  }
  sql = "SELECT * FROM `product` " + orderBy;
  if (req.body.inputSearch) {
    sql =
      "SELECT * FROM `product` WHERE `name` LIKE " +
      `'%${req.body.inputSearch}%'` +
      orderBy;
  }
  //解構付值
  const [results] = await db.query(sql);

  res.json(results);
  console.log(results);
});
router.post("/upload-photo", upload.single("imgurl"), (req, res) => {
  res.json(req.file);
});
router.get("/ProductData", async (req, res) => {
  let sql = "SELECT * FROM product ";
  const [results] = await db.query(sql);

  res.json(results);
});
router.get("/ProductData/:sid", async (req, res) => {
  let sql = "SELECT * FROM product WHERE sid=?";
  // 記得問老師為什麼
  const [results] = await db.query(sql, [req.params.sid]);
  res.json(results);
});
router.post("/edit/:sid", jsonParser, async (req, res) => {
  const data = { ...req.body };
  const sql = "UPDATE `product` SET ? WHERE sid=?";
  res.json("ok");
  console.log(req.params.sid);
  await db.query(sql, [data, parseInt(req.params.sid)]);
  console.log(data);
});
router.post("/addProduct", jsonParser, async (req, res) => {
  const data = { ...req.body };
  let sql = "INSERT INTO `product` set ?";
  await db.query(sql, [data]);

  console.log(req.body);
  res.json("ok");
});
router.delete("/del/:sid", async (req, res) => {
  const sql = "DELETE FROM `product` WHERE sid=?";
  console.log(req.params.sid);
  const [results] = await db.query(sql, [req.params.sid]);
  res.json([results]);
});

module.exports = router;

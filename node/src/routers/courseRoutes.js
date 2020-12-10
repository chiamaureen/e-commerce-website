const express = require("express")

const db = require("../db_connect2")

const router = express.Router()
const bodyParser = require("body-parser")
const jsonParser = bodyParser.json()
const fs = require("fs") //讀檔案寫檔案

//連線資料庫get資料方法
router.use("/get-db", jsonParser, async (req, res) => {
  sql = "SELECT * FROM `course_list`"
  if (req.body.inputSearch) {
    sql =
      "SELECT * FROM `course_list` WHERE `text` LIKE " +
      `'%${req.body.inputSearch}%'` +
      "OR `date` LIKE" +
      `'%${req.body.inputSearch}%'` +
      "OR `key_word` LIKE" +
      `'%${req.body.inputSearch}%'`
  }

  const [results] = await db.query(sql)
  res.json(results)
  console.log(req.body)
})

module.exports = router

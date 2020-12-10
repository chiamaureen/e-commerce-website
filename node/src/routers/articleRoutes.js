const express = require('express');
const moment = require('moment');
const db = require('../db_connect2');
const router = express.Router();
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()

router.get('/articleList', (req, res)=>{
res.json(req.params);
});

router.get('/forLatest',(req,res)=>{
    db.query('SELECT * FROM articlelist LIMIT 1')
    .then(([results])=>{
        for(let i of results){
            i.createTime = moment(i.createTime).format("YYYY-MM-DD")
        }
        res.json(results)
    })
})
router.get('/try-db-2',(req,res)=>{
    db.query('SELECT * FROM articlelist LIMIT 1')
    .then(([results])=>{
        for(let i of results){
            i.createTime = moment(i.createTime).format("YYYY-MM-DD")
        }
        res.json(results)
    })
})
router.use('/forList',jsonParser,(req,res)=>{
    db.query('SELECT * FROM articlelist')
    .then(([results])=>{
        for(let i of results){
            i.createTime = moment(i.createTime).format("YYYY-MM-DD")
        }
        console.log(req.body)
       
        res.json(results)
    })
   
})
router.post('/forSearch', jsonParser, async(req,res)=>{
//   console.log(req.body)
  if (req.body.inputSearch !== 0) {
    sql =
      "SELECT * FROM `articlelist` WHERE `title` LIKE " +
      `'%${req.body.inputSearch}%'`;
  }
  const [results] = await db.query(sql);
  for(let i of results){
    i.createTime = moment(i.createTime).format("YYYY-MM-DD")
}
  res.json(results)
//   console.log(results)
})


router.get('/forFeatured',(req,res)=>{
    db.query('SELECT * FROM articlelist LIMIT 6')
    .then(([results])=>{
        res.json(results)
    })
})
router.get('/try-db-all',(req,res)=>{
    db.query('SELECT * FROM `articlelist` WHERE 1')
    .then(([results])=>{
        res.json(results)
    })
})

module.exports = router;








// db.query('SELECT * FROM articlelist LIMIT 10')
// .then(([results])=>{
//     for(let i of results){
//         i.createTime = moment(i.createTime).format("YYYY-MM-DD")
//     }
   
//     res.json(results)
//     console.log(req.body)
// })
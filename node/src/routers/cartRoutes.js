const express = require('express')
const app = express()
const router = express.Router()
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()

const db = require('../db_connect2')

router.get('/', (req, res) => {
  res.send('123')
})

router.get('/cart', (req, res) => {
  db.query('SELECT * FROM tsao_products').then(([results]) => {
    res.json(results)
  })
})

// router.post('/order',jsonParser,(req, res)=>{
// const data = {...req.body}
// data.Order_CreatedTime = new Date()

// const sql = 'INSERT INTO `Order_Info` SET ?'

// db.query(sql, [data]).then((r)=>res.json({ok: 'ok'}))
// } )

module.exports = router

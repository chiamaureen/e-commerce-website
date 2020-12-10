const express = require('express')
const router = express.Router()
const db = require('../db_connect2')
const moment = require('moment-timezone')
const multer = require('multer')
const upload = multer({dest:'../tmp_uploads'})




async function getData (req) {
    const output = {
        page: 0,
        perPage: 5,
        totalRows: 0,
        totalPages: 0,
        rows: []
    }

    const [[{ totalRows }]] = await db.query("SELECT COUNT(1) totalRows FROM rating")
    if(totalRows>0){
        let page = parseInt(req.query.page) || 1
        output.totalRows = totalRows
        output.totalPages = Math.ceil(totalRows/output.perPage)

        if(page < 1) {
            output.page = 1
        } else if(page > output.totalPages) {
            output.page = output.totalPages
        } else {
            output.page = page
        }
        // LIMIT ${(output.page-1)*output.perPage}, ${output.perPage}
        let sql = `SELECT * FROM rating ORDER BY sid DESC `
        console.log(sql)
        const [r2] = await db.query(sql)
        r2.forEach(el=>{
            el.date = moment(el.date).format('YYYY-MM-DD')
        })
        output.rows = r2
    }

   return output
}

router.get('/formatList', async (req, res)=>{
    res.json(await getData(req) )
})

router.get('/list', (req, res)=>{
    db.query('SELECT * FROM rating ORDER BY sid DESC')
        .then(([results])=>{
           res.json(results)
        })
    // res.json([])
})

router.get('/getRating', async (req, res)=> {
    db.query('SELECT * FROM rating ORDER BY sid DESC')
        .then(([results])=>{
           
          let ratings = results.map((item) => item.rating);
          let sumRating = ratings.reduce((prev, element) => {
            // 與之前的數值加總，回傳後代入下一輪的處理
                return prev + element;
            }, 0);
          let avgRating = sumRating / ratings.length
          let oneStar=0;
          let twoStars=0;
          let threeStars=0;
          let fiveStars=0;
          let fourStars=0;
          ratings.forEach((item)=>{
            if(item === 1) oneStar++;
            if(item === 2) twoStars++;
            if(item === 3) threeStars++;
            if(item === 4) fourStars++;
            if(item === 5) fiveStars++;
          })
          res.json({oneStar,twoStars, threeStars, fourStars, fiveStars, avgRating});
            
    })
})

// INSERT INTO `rating`
//let set = (`sid`, `product_sid`, `name`, `email`, `skin_type`, `skin`, `rating`, `title`, `review`, `date`) VALUES ([value-1],[value-2],[value-3],[value-4],[value-5],[value-6],[value-7],[value-8],[value-9],[value-10])



router.post('/add',async(req,res)=>{
    const sql = "INSERT INTO `rating`(`sid`, `product_sid`, `name`, `email`, `skin_type`, `skin`, `rating`, `title`, `review`, `date`) VALUES (NULL,1,?,?,2,?,?,?,?,NOW())";
    const [result] = await db.query(sql,[
      req.body.name,
      req.body.email,
      req.body.rating,
      req.body.skin,
      req.body.title,
      req.body.review
    ]);
    console.log(result);
    if (result.affectedRows === 1) {
        return res.json({ message: "新增成功" });
      }
    // const insertId = result.insertId
    // return res.json({ success: !!affectedRows,
    //     affectedRows,
    //     insertId, })

  })

  router.delete('/del/:sid?', async(req, res)=>{
    const sql='DELETE FROM `rating` WHERE sid=?'
    const [results] =await db.query(sql,[req.params.sid])
  
     res.json([results])
})


module.exports=router
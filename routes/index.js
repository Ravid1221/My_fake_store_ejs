const express = require('express')
const router = express.Router()
const Course = require('../model/courseModel')

router.get('/', async (req,res)=>{
    const coursesArr = await Course.find()
    res.render('index', { coursesArr: coursesArr })
})

module.exports = router
const express = require('express')
const router = express.Router()
const Course = require('../model/courseModel')

router.get('/', async (req,res)=>{
    const purchasedCourses = await Course.find({ completed: true })
    res.render('purchased',{ coursesArr: purchasedCourses })
})

router.get('/drop/:id', async (req,res)=>{
    try {
        await Course.findByIdAndUpdate(req.params.id, { completed: false })
        res.redirect('/')
    } catch (err) {
        console.log(err)
        res.redirect('/')
    }
})

module.exports = router
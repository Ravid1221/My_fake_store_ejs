const express = require('express')
const router = express.Router()
const Course = require('../model/courseModel')

router.get('/:id', async (req,res)=>{
    const currentCourse = await Course.findById(req.params.id)
    res.render('course', { course: currentCourse })
})

router.get('/buy/:id', async (req,res)=>{
    try {
        await Course.findByIdAndUpdate(req.params.id , { completed: true })
        res.redirect('/')
    } catch (err) {
        console.log(err)
        res.redirect('/')
    }
})


module.exports = router
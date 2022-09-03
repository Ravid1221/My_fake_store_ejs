const mongoose = require('mongoose')

const courseSchema = new mongoose.Schema({
    courseName: String,
    title: String,
    description: String,
    price: Number,
    completed: Boolean,
})

const Course = mongoose.model('courses', courseSchema)

module.exports = Course
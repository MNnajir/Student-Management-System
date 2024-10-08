const express = require("express");

const router = express.Router();

const { createStudent,
     getAllStudents, 
     getStudentById, 
     updateStudent, 
     deleteStudent,
 } = require('../controllers/student')


router.route('/students')
.post(createStudent)
.get(getAllStudents)
router.route('/students/:id')
.get(getStudentById)
.patch(updateStudent)
.delete(deleteStudent)
module.exports = router;

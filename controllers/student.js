const Student = require('../models/student')

// create a new student

const createStudent = async (req, res) => {
    // const {name, age, email, address, grade, major, phone } = req.body;
    // try {
    //     const  student = new Student({name, age, email, address, grade, major, phone });
    //     await student.save();
    //     res.status(201).json(student);
    //     if(student){
    //         console.log("Student created successfully");
    //     }
    // } catch (error) {
    //     res.status(400).json({msg:'Error creating student '});   
    // } 
    try {
    const student = await Student.create(req.body)
    res.status(201).json({student})
    if(student){
        console.log("Student created successfully");
    }
    } catch (error) {
        res.status(400).json({msg:'Error creating student '})
    }
}

// get all students 
const getAllStudents = async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).json(students); 
        if(students){
            console.log("Students retrieved successfully");
        }
    }catch(error){
        res.status(400).json({msg:'Error fetching students'});
    }

}
// get a student by id
const getStudentById = async (req, res) => {
    try {
        const student = await Student.findById(req.params.id,
            req.body,
           { new:true,
            runValidators: true}
        );
        if(!student){
            return res.status(404).json({msg:'Student not found'});
            }
            res.status(200).json(student);
            } catch (error) {
                res.status(400).json({msg:'Error fetching student'});
                }
    }

    // get a student upadate
    const updateStudent = async (req, res) => {
        try {
            const student = await Student.findByIdAndUpdate(req.params.id, 
                req.body,
                {
                    new: true,
                    runValidators: true
                }
            );
            res.status(200).json(student);
            if(!student){
                return res.status(404).json({msg:'Student not found'});
            }
        } catch (error) {
            res.status(400).json({msg:'Error updating student'});
            
        }
    }

    // get a student delete 
    const deleteStudent = async (req, res) => {
        try {
            const student = await Student.findByIdAndDelete(req.params.id);
            res.status(200).json({msg:'Student deleted successfully'});
            if(!student){
                return res.status(404).json({msg:'Student not found'});
            }
        } catch(error){
            res.status(400).json({msg:'Error deleting student'});
        }
    }


module.exports = {
    createStudent,
    getAllStudents,
    getStudentById,
    updateStudent,
    deleteStudent
}
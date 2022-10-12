const router = require('express').Router()
const Employee = require('../model/employee')
const multer = require('multer');


const storage = multer.diskStorage({
  destination: function(req, file, cb){
    cb(null, './uploads/');
  },
  filename: function(req, file,cb){
    cb(null, new Date().toISOString() + file.originalname)
  }

})
const upload = multer({storage: storage})


/* ADD EMPLOYEE */

router.post("/addemployee", upload.single('employeeImage'), async(req, res) =>{
    const newEmployee = new Employee({
        //image: req.body.image,
        name: req.body.name,
        position: req.body.position,
        officePhone: req.body.officePhone,
        mobilePhone: req.body.mobilePhone,
        sms: req.body.sms,
        email: req.body.email
        });
    try {
        const savedEmployee = await newEmployee.save();
    res.status(200).json(savedEmployee);
  } catch (err) {
    res.status(500).json(err);
  }
    
})

module.exports = router

/* GET ALL EMPLOYEES */

router.get("/allemployees", async(req,res)=>{
  try{
    const result = await Employee.find({});
    res.status(200).json(result)
  } catch(err) {
    res.status(500).json(err)
  }
})

/* UPDATE AN EMPLOYEE */

router.put("/:id", async(req, res)=>{
  try{
    const updateEmployee = await Employee.findOneAndUpdate(
      req.params.id,
      {
        $set: req.body
      },
      {new:true}
    )
    res.status(200).json(updateEmployee)
  } catch(err){
    res.status(500).json(err);
  }
})

/* DELETE AN EMPLOYEE */

router.delete("/:id", async(req, res)=>{
  try{
    await Employee.findOneAndDelete(req.params.id)
    res.status(200).json(" The employee has been deleted")
  }catch(err){
    res.status(500).json(err);
  }
})

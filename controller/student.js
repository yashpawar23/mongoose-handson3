const {Information} = require("../models/student");

const studentEnrollment = async(req,res)=>{
    const studentData = req.body;

   try{
    const information = new Information({
        firstName : studentData.firstName,
        lastName: studentData.lastName,
        salary:studentData.salary,
        department:studentData.department,
        lastCompany:studentData.lastCompany,
        lastSalary:studentData.lastSalary,
        overallExp:studentData.overallExp,
        contactInfo:studentData.contactInfo,
        yearGrad:studentData.yearGrad,
        gradStream:studentData.gradStream,
        age:studentData.age,
        email:studentData.email,
        mobile:studentData.mobile,

        
        

    });
    const validatersult = information.validateSync()
    const dbResponse = await information.save();
    // await Information.insertMany([information]) 
    console.log("Data is saved", dbResponse);
    return res.status(200).send({message : dbResponse});
    

   }
   catch(error){
    console.log("Error in Operating", error.message)
    return res.status(500).send({message : error.message})

   }

    
}


const findStudent = async(req,res)=>{

    try{
        const queryparam = req.query;
       
        const dbResponse = await Information.find(queryparam  )
        return res.status(200).send({message:dbResponse})
    }
    catch(error){
        res.status(500).send({message:error.message})
    }
   
   }


const UpdateStudent = async(req,res)=>{

    try{
        const studata = req.body;
        const filter = studata.filter;
        const value = {$set:studata.value};
        const dbResponse = await Information.updateMany(filter,value)
        return res.status(200).send({message:dbResponse})
    }
    catch(error){
        res.status(500).send({message:error.message})
    }
   
   }

   const deleteStudent = async(req,res)=>{

    try{
        const queryparam = req.query;
       
        const dbResponse = await Information.deleteOne(queryparam)
        return res.status(200).send({message:dbResponse})
    }
    catch(error){
        res.status(500).send({message:error.message})
    }
   
   }


module.exports = {
    studentEnrollment,UpdateStudent,deleteStudent,findStudent
}
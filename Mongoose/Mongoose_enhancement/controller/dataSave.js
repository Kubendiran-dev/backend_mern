import departmentModel from "../models/departmentModel.js"

export const addData = async (req, res) => {

    console.log(req);


    try {


        const add = await departmentModel.create(req.body)


        if (add) {
            res.status(200).json({ msg: "successfully added" })
        }
        else {
            res.status(404).json({ msg: "failed" })
        }
    }
    catch (err) {

        console.log('error',err)
        

        res.status(404).json({ msg: "failed" })
    }
}

export const getData = async (req, res) => {

    console.log(req);
    
try{

    const getDataById = await departmentModel.findById(req.params.id)

    if(getDataById){
        
        res.status(200).json({getDataById})
    }
}


catch (err) {

        console.log('error',err)
        

        res.status(404).json({ msg: "failed" })
    }



}


export const update = async(req,res)=>{

    // console.log(req.params.id);

    console.log(req.body);
    
    
    try {

        const updateById = await departmentModel.findByIdAndUpdate(req.params.id,req.body)


        if(updateById){

            res.status(200).json({msg:"Updated Successfully"})
        }
        
    } catch (error) {
        
        res.status(404).json({ msg: "failed" })
    }
}

export const Delete = async(req,res)=>{


    console.log(req);
    
    try {
        

        const deleteById = await departmentModel.findByIdAndDelete(req.params.id,req.body)

    } catch (error) {
        

        res.status(404).json({ msg: "failed" })


    }
}
import movieDataModel from "../models/MovieData.js"

export const addData = async (req, res) => {

    // console.log(req);


    try {


        const add = await movieDataModel.create(req.body)


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

    // console.log(req);
    
try{

    const getDataById = await movieDataModel.findById(req.params.id)

    if(getDataById){
        
        res.status(200).json({getDataById})
    }
}


catch (err) {

        console.log('error',err)
        

        res.status(404).json({ msg: "failed" })
    }



}


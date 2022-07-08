import UserModel from '../Models/userModel.js'

// get a user
export const getUser = async(req, res) =>{
    const id = req.params.id;

    try{
        const user = await UserModel.findById(id);
        //! check user if user de db
        if(user)
        {
            const {password, ...otherDetails} = user._doc

            res.status(200).json(otherDetails)
        }
    } catch(error){
        res.status(500).json({error})
    }

}
import UserModel from '../Models/userModel.js'

// get a user
export const getUser = async(req, res) =>{
    const id = req.params.id;

    try{
        const user = await UserModel.findById(id);
        //! getting back only the name of the users
        if(user)
        {
            const {password, ...otherDetails} = user._doc

            res.status(200).json(otherDetails)
         }
         // ! check if use exist in database
         else
         { 
            res.status(404).json('No such user exists')
         }
        
    } catch(error){
        res.status(500).json(error)
    }

}
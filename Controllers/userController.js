import UserModel from '../Models/userModel.js'

// ! Get a user
export const getUser = async(req, res) =>{
    const id = req.params.id;

    try{
        const user = await UserModel.findById(id.match(/^[0-9a-fA-F]{24}$/)); // ! Yes, it's a valid ObjectId, proceed with `findById` call.
        //! getting back only the name of the users
        if(user)
        {
            const {password, ...otherDetails} = user._doc

            res.status(200).json(otherDetails)
         }
         // ! check if use exist in database
         else
         { 
            res.status(404).json("No such user exists")
         }  
    } catch(error){
        res.status(500).json(error)
    }
};

// ! Update a user


export const updateUser = async(req, res) => {
    const id = req.params.id;
    const { currentUserId, currentUserAdminStatus, password} = req.body

    if(id === currentUserId || currentUserAdminStatus)
    {
        try{
            const user = await UserModel.findByIdAndUpdate(id, req.body, {new: true})
            
            res.status(200).json(user)
        } catch(error){
            res.status(500).json(error)
        }
    }
}
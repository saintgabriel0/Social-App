import UserModel from '../Models/userModel.js'
import bcrypt from 'bcrypt';

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
            // password = newPassword.toString();
            if(password){
                const salt = bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(password, parseInt(salt));
            }
            const user = await UserModel.findByIdAndUpdate(id, req.body, {new: true})
            
            res.status(200).json(user)
        } catch(error){
            res.status(500).json(error);
            console.log(error);
        }
    }
    else {
        res.status(403).json('Access Denied! you can only update your own profile');
    }
}

//! Delete a user
export const deleteUser = async (req, res) => {
    const id = req.params.id
    
    const {currentUserId, currentUserAdminStatus} = req.body
    if(currentUserId === id || currentUserAdminStatus)
    {
        try{
            await UserModel.findByIdAndDelete(id)
            res.status(200).json('User deleted successfully')
        } catch(error){
            res.status(500).json(error);
            console.log(error);
        }
    } else{
        res.status(403).json('Access Denied! you can only delete your own profile');

    }

}
import user from '../model/userModel.js';

export const create = async (req, res) => {
    try {
        let userdata = new user(req.body);  
        const {email} = userdata;

        const userExist = await user.findOne({email});

        if(userExist){
            res.status(400).json({message: "User already exist"});
        }
        
            const saveduser = await userdata.save();
            res.status(200).json({saveduser});
        
    } 
    catch (err) {
        res.status(500).json({ message: "internal server error" });
    }
};

export const fetch = async (req, res) => {
    try {
        const users = await user.find();
        if (users.length === 0) {
            res.status(404).json({ message: "No user found" });
        }
        res.status(200).json({users});

    } catch (err) {
        res.status(500).json({ message: "internal server error" });
        
    }
};

export const update = async (req, res)=>{
    try {
        const id = req.params.id;
        const userExist = await user.findOne({_id:id});

        if(!userExist){
            res.status(404).json({message: "User not found"});
        }
        
        const updateUser = await user.findByIdAndUpdate(id, req.body, {new: true});
        res.status(200).json({updateUser});
    } catch (err) {
        res.status(500).json({ message: "internal server error" });
    }
};
 
export const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        const userExist = await user.findOne({_id:id});

        if(!userExist){
            res.status(404).json({message: "User not found"});
        }
        const deleteUser = await user.findByIdAndDelete(id);
        res.status(200).json({deleteUser});

    } catch (err) {
        res.status(500).json({ message: "internal server error" });
    }
};

export const specUser = async (req,res) => {
    try {
        const id = req.params.id;
        const userExist = await user.findOne({_id:id});

    if(!userExist){
        res.status(404).json({message: "User not found"});
    }
    const specUser = await user.findOne ({"name":"sankhar"})
    res.status(200).json({specUser})

    } catch (err) {
        res.status(500).json({ message: "internal server error" });
    }
    

}
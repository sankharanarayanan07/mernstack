import mongoose from "mongoose";

const userSchema = mongoose.Schema({ //(mongoose.Schema) to tell we are going to create a schema
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    }
});

export default mongoose.model("users", userSchema);

import mongoose from "mongoose";

const newSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    subtitle: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    img_main:{
        public_id: String,
        url:String
    },
    autor:{
        type: String,
        require: true,
    },
    autor_img:{
        type: String,
        require: true,
    }
},
{
    timestamps:true,
    versionKey: false
})

export default mongoose.model("news", newSchema);
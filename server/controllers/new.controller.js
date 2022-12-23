import New from "../models/new.model.js"

export const getNews = async(req,res) =>{
    try {
        const allNews = await New.find()
        return res.json(allNews)
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}

export const createNews = async(req,res) =>{
    try {
        const {title, subtitle, description, autor, autor_img} = req.body;
        console.log(req.body)
        const newNew= new New({title, subtitle, description, autor, autor_img});
        await newNew.save();
        return res.json(newNew)    
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}

export const getNew = async(req,res) =>{
    try {
        const {id} = req.params;
        const oneNew = await New.findById(id);
        if(!oneNew) return res.sendStatus(404);
        return res.json(oneNew) 
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}
export const updateNews = async(req,res) =>{
    try {
        const {id} = req.params;
        const updatedNew = await New.findByIdAndUpdate(id,req.body,{new:true});
        return res.json(updatedNew);
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}

export const deleteNews = async(req,res) =>{
    try {
        const {id} = req.params;
        const deletedNew = await New.findByIdAndDelete(id);
        if(!deletedNew) return res.sendStatus(404);
        return res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}
import book from "../modal/book.model.js"

export const  getBook = (req,resizeTo=>{
    try {
        const book =  await book.find();
        res.status(200).json(book);
        
    } catch (error) {
        console.log("Error", error);
        res.status(500).json(error);
        
    }
})
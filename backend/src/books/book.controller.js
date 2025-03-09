const Book = require("./book.model");

const postABook = async (req, res) => {
    try {
        // Create a new book instance from the model using the request body data
        const newBook = await Book(req.body);
        // Save the new book to the database
        const savedOrder = await newBook.save();

        res.status(200).json(savedOrder);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error creating the book", error });
    }
}

const getAllBooks = async (req, res) => {
    try {
        // Find all books in the database
        const books = await Book.find().sort({ createdAt: -1}) 
        res.status(200).json(books);

    }   catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error getting the books", error });
    }
}

const getSingleBook = async (req, res) => {
    try {

        const {id} = req.params;
        const book = await Book.findById(id);
         if (!book){
            res.status(404).json(book);

         }
        res.status(200).json( book );

    }   catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error creating the book", error });
    }
}


const updateBook = async (req, res) => {
    try {
        const {id} = req.params;
        const updatedBook = await Book.findByIdAndUpdate(id, req.body, {new : true})
        if(!updatedBook){
            res.status(404).json({ message: "Book not found!", book: updatedBook });
        }
        res.status(200).json({ message: "Book updated successfully!", book: updatedBook });
    } catch (error) {
        console.error("Error updating a book", error)
        res.status(500).send({message: "Failed to update a book"})
    }
}


const deleteABook = async (req, res) => {
    try {   
        const {id} = req.params
        const deletedBook = await Book.findByIdAndDelete(id);

        if(!deletedBook){
            res.status(404).json({ message: "Book not found!", book: deletedBook });
        }
        res.status(200).json({ message: "Book deleted successfully!", book: deletedBook});

    } catch (error) {
        console.error("Error deleting a book", error)
        res.status(500).send({message: "Failed to delete a book"})
    }

}





module.exports = {
    postABook,
    getAllBooks,
    getSingleBook,
    updateBook,
    deleteABook
}
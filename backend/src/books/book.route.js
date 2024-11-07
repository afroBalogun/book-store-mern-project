const express = require("express")
const router = express.Router()
const Book = require("./book.model");
const { postABook, getAllBooks, getSingleBook, updateBook, deleteABook } = require('./book.controller');
const verifyAdminToken = require("../middleware/verifyAdminToken");


// post a book
// post = submit something to frontend
// get = get something back from db
// put/patch = edit or update something
// delete = when delete something
router.post('/create-book', verifyAdminToken, postABook);


// get all books 
router.get('/', getAllBooks);

// single book endpoint
router.get("/:id", getSingleBook)

// update book data
router.put("/edit/:id", verifyAdminToken, updateBook)

router.delete("/:id", verifyAdminToken, deleteABook)


module.exports = router;

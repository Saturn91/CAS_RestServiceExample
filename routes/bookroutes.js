import express from 'express';
import {bookStore} from '../services/bookstorage.js';

const router = express.Router();

router.get("/books/add", bookStore.addBook);
router.get("/books", bookStore.getBooks);

const bookRouter = router;

export default bookRouter;
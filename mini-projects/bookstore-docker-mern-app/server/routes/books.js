const express = require("express");
const router = express.Router();
const Book = require("../models/book");

router.get("/", async (req, res) => {
  try {
    const books = await Book.find();
    return res.json(books);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);

    if (!book) {
      return res.status(404).json({ error: "data not found ..." });
    }

    return res.json(book);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

router.post("/", async (req, res) => {
  const book = new Book({
    isbn: req.body.isbn,
    title: req.body.title,
    author: req.body.author,
    price: req.body.price,
  });

  try {
    const newBook = await book.save();
    res.json(newBook);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

router.patch("/:id", async (req, res) => {
  const { isbn, title, author, price } = req.body;

  try {
    let book = await Book.findById(req.params.id);

    if (!book) {
      res.statusCode(404);
    }
    // update Object
    book.isbn = isbn;
    book.title = title;
    book.author = author || book.author;
    book.price = price || book.price;

    const updatedBook = await book.save();
    return res.json(updatedBook);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const book = await Book.deleteOne({ _id: req.params.id });
    return res.status(200).json(book);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

module.exports = router;

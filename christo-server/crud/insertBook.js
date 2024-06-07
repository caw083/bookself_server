import { nanoid } from 'nanoid';
import books from  '../databse/model.js'

const tambahBuku = (req, res) => {
  const {name, year, author, summary, publisher, pageCount, readPage, reading,} = req.body;

  if (!name) {
    return res.status(400).json({
      status: 'fail',
      message: 'Gagal menambahkan buku. Mohon isi nama buku',
    });
  }

  if (readPage > pageCount) {
    return res.status(400).json({
      status: 'fail',
      message: 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount',
    });
  }

  const id = nanoid();
  const insertedAt = new Date().toISOString();
  const updatedAt = insertedAt;
  const finished = readPage === pageCount;

  const newBook = {id, name, year, author, summary, publisher, pageCount, readPage, finished, reading, insertedAt, updatedAt};
  books.push(newBook);

  return res.status(201).json({
      status: 'success',
      message: 'Buku berhasil ditambahkan',
      data: {bookId: id,},
    }
  );

};

export default tambahBuku;

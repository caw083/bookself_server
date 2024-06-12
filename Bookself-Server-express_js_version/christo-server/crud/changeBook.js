import books from '../databse/model.js';

const ngubahBuku = (req, res) => {
  const { bookId } = req.params;
  const { name, year, author, summary, publisher, pageCount, readPage, reading } = req.body;

  if (readPage > pageCount) {
    return res.status(400).json({
      status: 'fail',
      message: 'Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount',
    });
  }

  if (!name) {
    return res.status(400).json({
      status: 'fail',
      message: 'Gagal memperbarui buku. Mohon isi nama buku',
    });
  }


  const bookIndex = books.findIndex(b => b.id === bookId);

  if (bookIndex === -1) {
    return res.status(404).json({
      status: 'fail',
      message: 'Gagal memperbarui buku. Id tidak ditemukan',
    });
  }

  const updatedAt = new Date().toISOString();

  books[bookIndex] = { ...books[bookIndex],name,year,author,summary,publisher,pageCount,readPage,reading,finished: readPage === pageCount,updatedAt,};

  return res.status(200).json({
    status: 'success',
    message: 'Buku berhasil diperbarui',
  });
};

export default ngubahBuku;

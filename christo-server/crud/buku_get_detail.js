import books from '../databse/model.js';

function getDetailwithIdBuku(req, res) {
    const { bookId } = req.params;
    const book = books.find(buku => buku.id === bookId);
  
    if (!book) {
      return res.status(404).json({
        status: 'fail',
        message: 'Buku tidak ditemukan',
      });
    }
  
    res.status(200).json({
      status: 'success',
      data: {book,},
    });
  }

export default getDetailwithIdBuku;
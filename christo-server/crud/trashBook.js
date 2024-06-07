import books from '../databse/model.js';

const bukuSampahHapus = (req, res) => {
  const { bookId } = req.params;
  const bukuIndex = books.findIndex((book) =>{book.id === bookId});

  if (bukuIndex === -1) {
    return res.status(404).json({
      status: 'fail',
      message: 'Buku gagal dihapus. Id tidak ditemukan',
    });
    } else {
      books.splice(bukuIndex, 1);
      return res.status(200).json({
        status: 'success',
        message: 'Buku berhasil dihapus',
        }
      );
    }
    
};

export default bukuSampahHapus;

import books from '../databse/model.js';

const getDetailwithIdBukuHandler = (request, h) => {
    const { bookId } = request.params;
    const book = books.find(buku => buku.id === bookId);

    if (!book) {
        return h.response({
            status: 'fail',
            message: 'Buku tidak ditemukan',
        }).code(404);
    } else {
      return h.response({
          status: 'success',
          data: { book },
      }).code(200);
  }
};

export default getDetailwithIdBukuHandler;
